using AutoMapper;
using System.Text;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

using src.Core.Utilities.Constants;
using src.Entities.Concrete.Auth;
using src.Entities.DTOs.Authentication;
using src.Business.Services.Abstract;
using src.Entities.DTOs.Activity;
using src.Core.Utilities.Enums;

namespace src.WebAPI.Controllers.Auth;

[Route("api/[controller]/[action]")]
[ApiController]
public class AuthenticationController : ControllerBase
{
    private readonly UserManager<AppUser> _userManager;
    private readonly RoleManager<IdentityRole<int>> _roleManager;
    private readonly IMapper _mapper;
    private readonly IConfiguration _configuration;
    private readonly src.Entities.Concrete.Auth.TokenOptions _tokenOptions;
    private readonly IActivityServices _activityServices;
    public AuthenticationController(
        UserManager<AppUser> userManager, 
        RoleManager<IdentityRole<int>> roleManager, 
        IMapper mapper, 
        IConfiguration configuration,
        IActivityServices activityServices
    )
    {
        _userManager = userManager;
        _roleManager = roleManager;
        _mapper = mapper;
        _configuration = configuration;
        _tokenOptions = configuration.GetSection("TokenOptions").Get<src.Entities.Concrete.Auth.TokenOptions>();
        _activityServices = activityServices;
    }

    [HttpPost]
    public async Task<IActionResult> Login(LoginDto login)
    {
        var user = await _userManager.FindByNameAsync(login.UserName);
        if(user == null)
        {
            return NotFound(ControllerReturn.Return<string>(success:false, msg:ResultMessages.NoMatchFound));
        }

        if(! await _userManager.CheckPasswordAsync(user, login.Password))
        {
            return Unauthorized(ControllerReturn.Return<string>(success:false, msg:ResultMessages.Unauthorized));
        }
        
        SymmetricSecurityKey securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_tokenOptions.SecurityKey));
        SigningCredentials signingCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
        JwtHeader header = new JwtHeader(signingCredentials);
        List<Claim> claims = new List<Claim>()
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim("Firstname", user.Firstname),
            new Claim("Lastname", user.Lastname),
            new Claim(ClaimTypes.Name, user.UserName),
            new Claim(ClaimTypes.Email, user.Email)
        };
        foreach(var role in await _userManager.GetRolesAsync(user))
        {
            claims.Add(new Claim(ClaimTypes.Role, role));
        }
        JwtPayload payload = new JwtPayload(
            issuer: _tokenOptions.Issuer,
            audience: _tokenOptions.Audience,
            claims: claims,
            notBefore: DateTime.UtcNow,
            expires: DateTime.UtcNow.AddHours(_tokenOptions.AccessTokenExpiration)
        );
        JwtSecurityToken token = new JwtSecurityToken(header, payload);
        JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
        string jwt = tokenHandler.WriteToken(token);

        var activity = new ActivityCreateDto()
        {
            Category = ActivityCategories.auth_login.ToString(),
            Description = ResultMessages.Logged.ToString(),
            UserId = user.Id
        };
        await _activityServices.CreateNewActivity(activity);

        return Ok(ControllerReturn.ReturnData<dynamic,string>(
            data: new {Code=200, Token=jwt, Expires=DateTime.UtcNow.AddHours(_tokenOptions.AccessTokenExpiration)},
            success: true,
            msg: ResultMessages.Logged
        ));
    }
    
    [HttpPost]
    public async Task<IActionResult> Register(RegisterDto register)
    {
        var user = _mapper.Map<AppUser>(register);

        var addedUser = await _userManager.CreateAsync(user, register.Password);
        if(!addedUser.Succeeded)
        {
            return BadRequest(ControllerReturn.Return<dynamic>(success:false, msg:addedUser.Errors));
        }

        string newRoleName = "User";
        if(!await _roleManager.RoleExistsAsync("User"))
        {
            var addedRole = await _roleManager.CreateAsync(new IdentityRole<int>(newRoleName));
            if(!addedRole.Succeeded)
            {
                return BadRequest(ControllerReturn.Return<dynamic>(success:false, msg:addedRole.Errors));
            }
        }

        await _userManager.AddToRoleAsync(user, newRoleName);

        var activity = new ActivityCreateDto()
        {
            Category = ActivityCategories.auth_register.ToString(),
            Description = $"{newRoleName} ID:{user.Id} successfully registered.",
            UserId = user.Id
        };
        await _activityServices.CreateNewActivity(activity);

        return Ok(ControllerReturn.Return<string>(success: true, msg: ResultMessages.Registered));
    }
}
