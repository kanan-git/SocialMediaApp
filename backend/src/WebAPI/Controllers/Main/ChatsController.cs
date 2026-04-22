using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using src.Business.Services.Abstract;
using src.Core.Utilities.Constants;
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
            return Ok(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
    }

    [HttpGet]
    public async Task<IActionResult> GetAllChats()
    {
        var chats = await _chatServices.GetAllChats();
        if(chats.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic, string>(data:chats.Data, success:chats.Success, msg:chats.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic, string>(data:chats.Data, success:chats.Success, msg:chats.Message));
    }

    [HttpGet("{page}")]
    public async Task<IActionResult> GetAllChatsPaginated(int page, int size)
    {
        var chats = await _chatServices.GetAllChatsPaginated(page, size);
        if(chats.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic, string>(data:chats.Data, success:chats.Success, msg:chats.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic, string>(data:chats.Data, success:chats.Success, msg:chats.Message));
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetChatById(int id)
    {
        var data = await _chatServices.GetChatById(id);
        if(data.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic, string>(data:data.Data, success:data.Success, msg:data.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic, string>(data:data.Data, success:data.Success, msg:data.Message));
    }

    [HttpPut("{id}")]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> UpdateChat(int id, ChatUpdateDto update)
    {
        var result = await _chatServices.UpdateChat(id, update);
        if(result.Success)
        {
            return Ok(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
    }

    [HttpDelete("{id}")]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> RemoveChat(int id)
    {
        var result = await _chatServices.RemoveChat(id);
        if(result.Success)
        {
            return Ok(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
    }
}
