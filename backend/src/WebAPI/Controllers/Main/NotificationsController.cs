using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using src.Business.Services.Abstract;
using src.Core.Utilities.Constants;
using src.Core.Utilities.Exceptions;
using src.Entities.DTOs.Notification;

namespace src.WebAPI.Controllers.Main;

[Route("api/[controller]/[action]")]
[ApiController]
public class NotificationsController : ControllerBase
{
    private readonly INotificationServices _notificationServices;
    public NotificationsController(INotificationServices notificationServices)
    {
        _notificationServices = notificationServices;
    }

    [HttpPost]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> CreateNewNotification(NotificationCreateDto create)
    {
        var result = await _notificationServices.CreateNewNotification(create);
        if(result.Success)
        {
            return Ok(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
    }

    [HttpGet]
    public async Task<IActionResult> GetAllNotifications()
    {
        var notifications = await _notificationServices.GetAllNotifications();
        if(notifications.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic, string>(data:notifications.Data, success:notifications.Success, msg:notifications.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic, string>(data:notifications.Data, success:notifications.Success, msg:notifications.Message));
    }

    [HttpGet("{page}")]
    public async Task<IActionResult> GetAllNotificationsPaginated(int page, int size)
    {
        var notifications = await _notificationServices.GetAllNotificationsPaginated(page, size);
        if(notifications.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic, string>(data:notifications.Data, success:notifications.Success, msg:notifications.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic, string>(data:notifications.Data, success:notifications.Success, msg:notifications.Message));
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetNotificationById(int id)
    {
        var data = await _notificationServices.GetNotificationById(id);
        if(data.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic, string>(data:data.Data, success:data.Success, msg:data.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic, string>(data:data.Data, success:data.Success, msg:data.Message));
    }

    [HttpPut("{id}")]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> UpdateNotification(int id, NotificationUpdateDto update)
    {
        var result = await _notificationServices.UpdateNotification(id, update);
        if(result.Success)
        {
            return Ok(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
    }

    [HttpDelete("{id}")]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> RemoveNotification(int id)
    {
        var result = await _notificationServices.RemoveNotification(id);
        if(result.Success)
        {
            return Ok(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
    }
}
