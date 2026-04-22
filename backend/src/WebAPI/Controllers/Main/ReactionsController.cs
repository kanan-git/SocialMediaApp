using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using src.Business.Services.Abstract;
using src.Core.Utilities.Constants;
using src.Entities.DTOs.Reaction;

namespace src.WebAPI.Controllers.Main;

[Route("api/[controller]/[action]")]
[ApiController]
public class ReactionsController : ControllerBase
{
    private readonly IReactionServices _reactionServices;
    private readonly INotificationServices _notificationServices;
    public ReactionsController(IReactionServices reactionServices, INotificationServices notificationServices)
    {
        _reactionServices = reactionServices;
        _notificationServices = notificationServices;
    }

    [HttpPost]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> CreateNewReaction(ReactionCreateDto create)
    {
        // var notification = new NotificationCreateDto()
        // {
        //     // Type = NotificationType.post_got_like.ToString(),
        //     // Description = $"",
        //     // IsRead = false,
        //     // ReceiverUserId = 
        // };
        // await _notificationServices.CreateNewNotification(notification);
        var result = await _reactionServices.CreateNewReaction(create);

        if(result.Success)
        {
            return Ok(ControllerReturn.Return(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return(success:result.Success, msg:result.Message));
    }

    [HttpGet]
    public async Task<IActionResult> GetAllReactions()
    {
        var reactions = await _reactionServices.GetAllReactions();
        if(reactions.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic,string>(data:reactions.Data, success:reactions.Success, msg:reactions.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic,string>(data:reactions.Data, success:reactions.Success, msg:reactions.Message));
    }

    [HttpGet("{page}")]
    public async Task<IActionResult> GetAllReactionsPaginated(int page, int size)
    {
        var reactions = await _reactionServices.GetAllReactionsPaginated(page, size);
        if(reactions.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic,string>(data:reactions.Data, success:reactions.Success, msg:reactions.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic,string>(data:reactions.Data, success:reactions.Success, msg:reactions.Message));
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetReactionById(int id)
    {
        var data = await _reactionServices.GetReactionById(id);
        if(data.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic,string>(data:data.Data, success:data.Success, msg:data.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic,string>(data:data.Data, success:data.Success, msg:data.Message));
    }

    [HttpPut("{id}")]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> UpdateReaction(int id, ReactionUpdateDto update)
    {
        var result = await _reactionServices.UpdateReaction(id, update);
        if(result.Success)
        {
            return Ok(ControllerReturn.Return(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return(success:result.Success, msg:result.Message));
    }

    [HttpDelete("{id}")]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> RemoveReaction(int id)
    {
        var result = await _reactionServices.RemoveReaction(id);
        if(result.Success)
        {
            return Ok(ControllerReturn.Return(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return(success:result.Success, msg:result.Message));
    }
}
