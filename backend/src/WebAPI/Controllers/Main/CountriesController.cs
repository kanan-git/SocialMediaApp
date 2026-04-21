using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using src.Business.Services.Abstract;
using src.Core.Utilities.Exceptions;
using src.Entities.DTOs.Country;

namespace src.WebAPI.Controllers.Main;

[Route("api/[controller]/[action]")]
[ApiController]
public class CountriesController : ControllerBase
{
    private readonly ICountryServices _countryServices;
    public CountriesController(ICountryServices countryServices)
    {
        _countryServices = countryServices;
    }

    [HttpPost]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> CreateNewCountry(CountryCreateDto create)
    {
        var result = await _countryServices.CreateNewCountry(create);
        if(result.Success)
        {
            return Ok(new
            {
                Success = result.Success,
                Message = result.Message
            });
        }
        return BadRequest(new
        {
            Success = result.Success,
            Message = result.Message
        });
    }

    [HttpGet]
    public async Task<IActionResult> GetAllCountries()
    {
        var countries = await _countryServices.GetAllCountries();
        if(countries.Success)
        {
            return Ok(new
            {
                Success = countries.Success,
                Message = countries.Message,
                Data = countries.Data
            });
        }
        return BadRequest(new
        {
            Success = countries.Success,
            Message = countries.Message,
            Data = countries.Data
        });
    }

    [HttpGet("{page}")]
    public async Task<IActionResult> GetAllCountriesPaginated(int page, int size)
    {
        var countries = await _countryServices.GetAllCountriesPaginated(page, size);
        if(countries.Success)
        {
            return Ok(new
            {
                Success = countries.Success,
                Message = countries.Message,
                Data = countries.Data
            });
        }
        return BadRequest(new
        {
            Success = countries.Success,
            Message = countries.Message,
            Data = countries.Data
        });
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetCountryById(int id)
    {
        var data = await _countryServices.GetCountryById(id);
        if(data.Success)
        {
            return Ok(new
            {
                Success = data.Success,
                Message = data.Message,
                Data = data.Data
            });
        }
        return BadRequest(new
        {
            Success = data.Success,
            Message = data.Message,
            Data = data.Data
        });
    }

    [HttpPut("{id}")]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> UpdateCountry(int id, CountryUpdateDto update)
    {
        var result = await _countryServices.UpdateCountry(id, update);
        if(result.Success)
        {
            return Ok(new
            {
                Success = result.Success,
                Message = result.Message
            });
        }
        return BadRequest(new
        {
            Success = result.Success,
            Message = result.Message
        });
    }

    [HttpDelete("{id}")]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> RemoveCountry(int id)
    {
        var result = await _countryServices.RemoveCountry(id);
        if(result.Success)
        {
            return Ok(new
            {
                Success = result.Success,
                Message = result.Message
            });
        }
        return BadRequest(new
        {
            Success = result.Success,
            Message = result.Message
        });
    }
}
