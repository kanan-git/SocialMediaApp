using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using src.Business.Services.Abstract;
using src.Core.Utilities.Constants;
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
            return Ok(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
    }

    [HttpGet]
    public async Task<IActionResult> GetAllCities()
    {
        var cities = await _cityServices.GetAllCities();
        if(cities.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic, string>(data:cities.Data, success:cities.Success, msg:cities.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic, string>(data:cities.Data, success:cities.Success, msg:cities.Message));
    }

    [HttpGet("{page}")]
    public async Task<IActionResult> GetAllCitiesPaginated(int page, int size)
    {
        var cities = await _cityServices.GetAllCitiesPaginated(page, size);
        if(cities.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic, string>(data:cities.Data, success:cities.Success, msg:cities.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic, string>(data:cities.Data, success:cities.Success, msg:cities.Message));
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetCityById(int id)
    {
        var data = await _cityServices.GetCityById(id);
        if(data.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic, string>(data:data.Data, success:data.Success, msg:data.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic, string>(data:data.Data, success:data.Success, msg:data.Message));
    }

    [HttpPut("{id}")]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> UpdateCity(int id, CityUpdateDto update)
    {
        var result = await _cityServices.UpdateCity(id, update);
        if(result.Success)
        {
            return Ok(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
    }

    [HttpDelete("{id}")]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> RemoveCity(int id)
    {
        var result = await _cityServices.RemoveCity(id);
        if(result.Success)
        {
            return Ok(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
    }
}
