using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using src.Business.Services.Abstract;
using src.Core.Utilities.Constants;
using src.Entities.DTOs.Post;

namespace src.WebAPI.Controllers.Main;

[Route("api/[controller]/[action]")]
[ApiController]
public class PostsController : ControllerBase
{
    private readonly IPostServices _postServices;
    private readonly IActivityServices _activityServices;
    private readonly INotificationServices _notificationServices;
    public PostsController(IPostServices postServices, IActivityServices activityServices, INotificationServices notificationServices)
    {
        _postServices = postServices;
        _activityServices = activityServices;
        _notificationServices = notificationServices;
    }

    [HttpPost]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> CreateNewPost(PostCreateDto create)
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
        //     // Type = NotificationType.new_post.ToString(),
        //     // Description = $"",
        //     // IsRead = false,
        //     // ReceiverUserId = 
        // };
        // await _notificationServices.CreateNewNotification(notification);
        var result = await _postServices.CreateNewPost(create);
        if(result.Success)
        {
            return Ok(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
    }

    [HttpGet]
    public async Task<IActionResult> GetAllPosts()
    {
        var posts = await _postServices.GetAllPosts();
        if(posts.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic,string>(data:posts.Data, success:posts.Success, msg:posts.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic,string>(data:posts.Data, success:posts.Success, msg:posts.Message));
    }

    [HttpGet("{page}")]
    public async Task<IActionResult> GetAllPostsPaginated(int page, int size)
    {
        var posts = await _postServices.GetAllPostsPaginated(page, size);
        if(posts.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic,string>(data:posts.Data, success:posts.Success, msg:posts.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic,string>(data:posts.Data, success:posts.Success, msg:posts.Message));
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetPostById(int id)
    {
        var data = await _postServices.GetPostById(id);
        if(data.Success)
        {
            return Ok(ControllerReturn.ReturnData<dynamic,string>(data:data.Data, success:data.Success, msg:data.Message));
        }
        return BadRequest(ControllerReturn.ReturnData<dynamic,string>(data:data.Data, success:data.Success, msg:data.Message));
    }

    [HttpPut("{id}")]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> UpdatePost(int id, PostUpdateDto update)
    {
        var result = await _postServices.UpdatePost(id, update);
        if(result.Success)
        {
            return Ok(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
    }

    [HttpDelete("{id}")]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> RemovePost(int id)
    {
        var result = await _postServices.RemovePost(id);
        if(result.Success)
        {
            return Ok(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
        }
        return BadRequest(ControllerReturn.Return<string>(success:result.Success, msg:result.Message));
    }
}
