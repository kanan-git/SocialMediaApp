using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using src.Business.Services.Abstract;
using src.Core.Utilities.Constants;
using src.Core.Utilities.Exceptions;
using src.Entities.DTOs.Comment;

namespace src.WebAPI.Controllers.Main;

[Route("api/[controller]/[action]")]
[ApiController]
public class CommentsController : ControllerBase
{
    private readonly ICommentServices _commentServices;
    private readonly IActivityServices _activityServices;
    private readonly INotificationServices _notificationServices;
    public CommentsController(ICommentServices commentServices, IActivityServices activityServices, INotificationServices notificationServices)
    {
        _commentServices = commentServices;
        _activityServices = activityServices;
        _notificationServices = notificationServices;
    }

    [HttpPost]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> CreateNewComment(CommentCreateDto create)
    {
        // var activity = new ActivityCreateDto()
        // {
        //     // Category = ActivityCategories.content_create.ToString(),
        //     // Description = $"",
        //     // UserId = create.UserId
        // };
        // await _activityServices.CreateNewActivity(activity);
        // var notification = new NotificationCreateDto()
        // {
        //     // Type = NotificationType.got_comment.ToString(),
        //     // Description = $"",
        //     // IsRead = false,
        //     // ReceiverUserId = 
        // };
        // await _notificationServices.CreateNewNotification(notification);
        var result = await _commentServices.CreateNewComment(create);
        if(result.Success)
        {
            return Ok(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
    }

    [HttpGet]
    public async Task<IActionResult> GetAllComments()
    {
        var comments = await _commentServices.GetAllComments();
        if(comments.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic, string>(data:comments.Data, success:comments.Success, msg:comments.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic, string>(data:comments.Data, success:comments.Success, msg:comments.Message));
    }

    [HttpGet("{page}")]
    public async Task<IActionResult> GetAllCommentsPaginated(int page, int size)
    {
        var comments = await _commentServices.GetAllCommentsPaginated(page, size);
        if(comments.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic, string>(data:comments.Data, success:comments.Success, msg:comments.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic, string>(data:comments.Data, success:comments.Success, msg:comments.Message));
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetCommentById(int id)
    {
        var data = await _commentServices.GetCommentById(id);
        if(data.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic, string>(data:data.Data, success:data.Success, msg:data.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic, string>(data:data.Data, success:data.Success, msg:data.Message));
    }

    [HttpPut("{id}")]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> UpdateComment(int id, CommentUpdateDto update)
    {
        var result = await _commentServices.UpdateComment(id, update);
        if(result.Success)
        {
            return Ok(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
    }

    [HttpDelete("{id}")]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> RemoveComment(int id)
    {
        var result = await _commentServices.RemoveComment(id);
        if(result.Success)
        {
            return Ok(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
    }
}
