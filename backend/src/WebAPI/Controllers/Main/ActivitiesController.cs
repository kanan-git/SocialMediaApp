using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using src.Business.Services.Abstract;
using src.Core.Utilities.Exceptions;
using src.Entities.DTOs.Activity;

namespace src.WebAPI.Controllers.Main;

[Route("api/[controller]/[action]")]
[ApiController]
public class ActivitiesController : ControllerBase
{
    private readonly IActivityServices _activityServices;
    public ActivitiesController(IActivityServices activityServices)
    {
        _activityServices = activityServices;
    }

    [HttpPost]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> CreateNewActivity(ActivityCreateDto create)
    {
        var result = await _activityServices.CreateNewActivity(create);
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
    public async Task<IActionResult> GetAllActivities()
    {
        var activities = await _activityServices.GetAllActivities();
        if(activities.Success)
        {
            return Ok(new
            {
                Success = activities.Success,
                Message = activities.Message,
                Data = activities.Data
            });
        }
        return BadRequest(new
        {
            Success = activities.Success,
            Message = activities.Message,
            Data = activities.Data
        });
    }

    [HttpGet("{page}")]
    public async Task<IActionResult> GetAllActivitiesPaginated(int page, int size)
    {
        var activities = await _activityServices.GetAllActivitiesPaginated(page, size);
        if(activities.Success)
        {
            return Ok(new
            {
                Success = activities.Success,
                Message = activities.Message,
                Data = activities.Data
            });
        }
        return BadRequest(new
        {
            Success = activities.Success,
            Message = activities.Message,
            Data = activities.Data
        });
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetActivityById(int id)
    {
        var data = await _activityServices.GetActivityById(id);
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
    public async Task<IActionResult> UpdateActivity(int id, ActivityUpdateDto update)
    {
        var result = await _activityServices.UpdateActivity(id, update);
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
    public async Task<IActionResult> RemoveActivity(int id)
    {
        var result = await _activityServices.RemoveActivity(id);
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
