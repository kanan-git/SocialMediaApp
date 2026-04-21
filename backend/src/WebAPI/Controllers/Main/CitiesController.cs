using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using src.Business.Services.Abstract;
using src.Core.Utilities.Exceptions;
using src.Entities.DTOs.City;

namespace src.WebAPI.Controllers.Main;

[Route("api/[controller]/[action]")]
[ApiController]
public class CitiesController : ControllerBase
{
    private readonly ICityServices _cityServices;
    public CitiesController(ICityServices cityServices)
    {
        _cityServices = cityServices;
    }

    [HttpPost]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> CreateNewCity(CityCreateDto create)
    {
        var result = await _cityServices.CreateNewCity(create);
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
    public async Task<IActionResult> GetAllCities()
    {
        var cities = await _cityServices.GetAllCities();
        if(cities.Success)
        {
            return Ok(new
            {
                Success = cities.Success,
                Message = cities.Message,
                Data = cities.Data
            });
        }
        return BadRequest(new
        {
            Success = cities.Success,
            Message = cities.Message,
            Data = cities.Data
        });
    }

    [HttpGet("{page}")]
    public async Task<IActionResult> GetAllCitiesPaginated(int page, int size)
    {
        var cities = await _cityServices.GetAllCitiesPaginated(page, size);
        if(cities.Success)
        {
            return Ok(new
            {
                Success = cities.Success,
                Message = cities.Message,
                Data = cities.Data
            });
        }
        return BadRequest(new
        {
            Success = cities.Success,
            Message = cities.Message,
            Data = cities.Data
        });
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetCityById(int id)
    {
        var data = await _cityServices.GetCityById(id);
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
    public async Task<IActionResult> UpdateCity(int id, CityUpdateDto update)
    {
        var result = await _cityServices.UpdateCity(id, update);
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
    public async Task<IActionResult> RemoveCity(int id)
    {
        var result = await _cityServices.RemoveCity(id);
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
