using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using src.Business.Services.Abstract;
using src.Core.Utilities.Constants;
using src.Core.Utilities.Exceptions;
using src.Entities.DTOs.Hashtag;

namespace src.WebAPI.Controllers.Main;

[Route("api/[controller]/[action]")]
[ApiController]
public class HashtagsController : ControllerBase
{
    private readonly IHashtagServices _hashtagServices;
    public HashtagsController(IHashtagServices hashtagServices)
    {
        _hashtagServices = hashtagServices;
    }

    [HttpPost]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> CreateNewHashtag(HashtagCreateDto create)
    {
        var result = await _hashtagServices.CreateNewHashtag(create);
        if(result.Success)
        {
            return Ok(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
    }

    [HttpGet]
    public async Task<IActionResult> GetAllHashtags()
    {
        var hashtags = await _hashtagServices.GetAllHashtags();
        if(hashtags.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic,string>(data:hashtags.Data, success:hashtags.Success, msg:hashtags.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic,string>(data:hashtags.Data, success:hashtags.Success, msg:hashtags.Message));
    }

    [HttpGet("{page}")]
    public async Task<IActionResult> GetAllHashtagsPaginated(int page, int size)
    {
        var hashtags = await _hashtagServices.GetAllHashtagsPaginated(page, size);
        if(hashtags.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic,string>(data:hashtags.Data, success:hashtags.Success, msg:hashtags.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic,string>(data:hashtags.Data, success:hashtags.Success, msg:hashtags.Message));
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetHashtagById(int id)
    {
        var data = await _hashtagServices.GetHashtagById(id);
        if(data.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic,string>(data:data.Data, success:data.Success, msg:data.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic,string>(data:data.Data, success:data.Success, msg:data.Message));
    }

    [HttpPut("{id}")]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> UpdateHashtag(int id, HashtagUpdateDto update)
    {
        var result = await _hashtagServices.UpdateHashtag(id, update);
        if(result.Success)
        {
            return Ok(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
    }

    [HttpDelete("{id}")]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> RemoveHashtag(int id)
    {
        var result = await _hashtagServices.RemoveHashtag(id);
        if(result.Success)
        {
            return Ok(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
    }
}
