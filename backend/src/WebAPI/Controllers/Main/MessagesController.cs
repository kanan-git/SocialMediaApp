using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using src.Business.Services.Abstract;
using src.Core.Utilities.Constants;
using src.Core.Utilities.Exceptions;
using src.Entities.DTOs.Message;

namespace src.WebAPI.Controllers.Main;

[Route("api/[controller]/[action]")]
[ApiController]
public class MessagesController : ControllerBase
{
    private readonly IMessageServices _messageServices;
    private readonly INotificationServices _notificationServices;
    public MessagesController(IMessageServices messageServices, INotificationServices notificationServices)
    {
        _messageServices = messageServices;
        _notificationServices = notificationServices;
    }

    [HttpPost]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> CreateNewMessage(MessageCreateDto create)
    {
        // var notification = new NotificationCreateDto()
        // {
        //     // Type = NotificationType.message_received.ToString(),
        //     // Description = $"",
        //     // IsRead = false,
        //     // ReceiverUserId = 
        // };
        // await _notificationServices.CreateNewNotification(notification);
        var result = await _messageServices.CreateNewMessage(create);
        if(result.Success)
        {
            return Ok(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
    }

    [HttpGet]
    public async Task<IActionResult> GetAllMessages()
    {
        var messages = await _messageServices.GetAllMessages();
        if(messages.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic,string>(data:messages.Data, success:messages.Success, msg:messages.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic,string>(data:messages.Data, success:messages.Success, msg:messages.Message));
    }

    [HttpGet("{page}")]
    public async Task<IActionResult> GetAllMessagesPaginated(int page, int size)
    {
        var messages = await _messageServices.GetAllMessagesPaginated(page, size);
        if(messages.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic,string>(data:messages.Data, success:messages.Success, msg:messages.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic,string>(data:messages.Data, success:messages.Success, msg:messages.Message));
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetMessageById(int id)
    {
        var data = await _messageServices.GetMessageById(id);
        if(data.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic,string>(data:data.Data, success:data.Success, msg:data.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic,string>(data:data.Data, success:data.Success, msg:data.Message));
    }

    [HttpPut("{id}")]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> UpdateMessage(int id, MessageUpdateDto update)
    {
        var result = await _messageServices.UpdateMessage(id, update);
        if(result.Success)
        {
            return Ok(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
    }

    [HttpDelete("{id}")]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> RemoveMessage(int id)
    {
        var result = await _messageServices.RemoveMessage(id);
        if(result.Success)
        {
            return Ok(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
    }
}
