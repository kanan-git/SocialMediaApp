using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using src.Business.Services.Abstract;
using src.Core.Utilities.Constants;
// using src.Core.Utilities.Exceptions;
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
            return Ok(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
    }

    [HttpGet]
    public async Task<IActionResult> GetAllActivities()
    {
        var activities = await _activityServices.GetAllActivities();
        if(activities.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic,string>(data:activities.Data, success:activities.Success, msg:activities.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic,string>(data:activities.Data, success:activities.Success, msg:activities.Message));
    }

    [HttpGet("{page}")]
    public async Task<IActionResult> GetAllActivitiesPaginated(int page, int size)
    {
        var activities = await _activityServices.GetAllActivitiesPaginated(page, size);
        if(activities.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic,string>(data:activities.Data, success:activities.Success, msg:activities.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<object,string>(data:activities.Data, success:activities.Success, msg:activities.Message));
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetActivityById(int id)
    {
        var data = await _activityServices.GetActivityById(id);
        if(data.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic,string>(data:data.Data, success:data.Success, msg:data.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic,string>(data:data.Data, success:data.Success, msg:data.Message));
    }

    [HttpPut("{id}")]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> UpdateActivity(int id, ActivityUpdateDto update)
    {
        var result = await _activityServices.UpdateActivity(id, update);
        if(result.Success)
        {
            return Ok(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
    }

    [HttpDelete("{id}")]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> RemoveActivity(int id)
    {
        var result = await _activityServices.RemoveActivity(id);
        if(result.Success)
        {
            return Ok(ControllerReturn.Return(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return(success:result.Success, msg:result.Message));
    }
}
