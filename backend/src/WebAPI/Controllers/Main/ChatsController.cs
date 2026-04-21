using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using src.Business.Services.Abstract;
using src.Core.Utilities.Exceptions;
using src.Entities.DTOs.Chat;

namespace src.WebAPI.Controllers.Main;

[Route("api/[controller]/[action]")]
[ApiController]
public class ChatsController : ControllerBase
{
    private readonly IChatServices _chatServices;
    public ChatsController(IChatServices chatServices)
    {
        _chatServices = chatServices;
    }

    [HttpPost]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> CreateNewChat(ChatCreateDto create)
    {
        var result = await _chatServices.CreateNewChat(create);
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
    public async Task<IActionResult> GetAllChats()
    {
        var chats = await _chatServices.GetAllChats();
        if(chats.Success)
        {
            return Ok(new
            {
                Success = chats.Success,
                Message = chats.Message,
                Data = chats.Data
            });
        }
        return BadRequest(new
        {
            Success = chats.Success,
            Message = chats.Message,
            Data = chats.Data
        });
    }

    [HttpGet("{page}")]
    public async Task<IActionResult> GetAllChatsPaginated(int page, int size)
    {
        var chats = await _chatServices.GetAllChatsPaginated(page, size);
        if(chats.Success)
        {
            return Ok(new
            {
                Success = chats.Success,
                Message = chats.Message,
                Data = chats.Data
            });
        }
        return BadRequest(new
        {
            Success = chats.Success,
            Message = chats.Message,
            Data = chats.Data
        });
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetChatById(int id)
    {
        var data = await _chatServices.GetChatById(id);
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
    public async Task<IActionResult> UpdateChat(int id, ChatUpdateDto update)
    {
        var result = await _chatServices.UpdateChat(id, update);
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
    public async Task<IActionResult> RemoveChat(int id)
    {
        var result = await _chatServices.RemoveChat(id);
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
