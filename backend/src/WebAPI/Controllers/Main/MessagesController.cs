using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using src.Business.Services.Abstract;
using src.Core.Utilities.Exceptions;
using src.Entities.DTOs.Message;

namespace src.WebAPI.Controllers.Main;

[Route("api/[controller]/[action]")]
[ApiController]
public class MessagesController : ControllerBase
{
    private readonly IMessageServices _messageServices;
    public MessagesController(IMessageServices messageServices)
    {
        _messageServices = messageServices;
    }

    [HttpPost]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> CreateNewMessage(MessageCreateDto create)
    {
        var result = await _messageServices.CreateNewMessage(create);
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
    public async Task<IActionResult> GetAllMessages()
    {
        var messages = await _messageServices.GetAllMessages();
        if(messages.Success)
        {
            return Ok(new
            {
                Success = messages.Success,
                Message = messages.Message,
                Data = messages.Data
            });
        }
        return BadRequest(new
        {
            Success = messages.Success,
            Message = messages.Message,
            Data = messages.Data
        });
    }

    [HttpGet("{page}")]
    public async Task<IActionResult> GetAllMessagesPaginated(int page, int size)
    {
        var messages = await _messageServices.GetAllMessagesPaginated(page, size);
        if(messages.Success)
        {
            return Ok(new
            {
                Success = messages.Success,
                Message = messages.Message,
                Data = messages.Data
            });
        }
        return BadRequest(new
        {
            Success = messages.Success,
            Message = messages.Message,
            Data = messages.Data
        });
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetMessageById(int id)
    {
        var data = await _messageServices.GetMessageById(id);
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
    public async Task<IActionResult> UpdateMessage(int id, MessageUpdateDto update)
    {
        var result = await _messageServices.UpdateMessage(id, update);
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
    public async Task<IActionResult> RemoveMessage(int id)
    {
        var result = await _messageServices.RemoveMessage(id);
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
