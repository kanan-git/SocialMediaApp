using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using src.Business.Services.Abstract;
using src.Entities.DTOs.Post;

namespace src.WebAPI.Controllers.Main;

[Route("api/[controller]/[action]")]
[ApiController]
public class PostsController : ControllerBase
{
    private readonly IPostServices _postServices;
    public PostsController(IPostServices postServices)
    {
        _postServices = postServices;
    }

    [HttpPost]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> CreateNewPost(PostCreateDto create)
    {
        var result = await _postServices.CreateNewPost(create);
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
    public async Task<IActionResult> GetAllPosts()
    {
        var posts = await _postServices.GetAllPosts();
        if(posts.Success)
        {
            return Ok(new
            {
                Success = posts.Success,
                Message = posts.Message,
                Data = posts.Data
            });
        }
        return BadRequest(new
        {
            Success = posts.Success,
            Message = posts.Message,
            Data = posts.Data
        });
    }

    [HttpGet("{page}")]
    public async Task<IActionResult> GetAllPostsPaginated(int page, int size)
    {
        var posts = await _postServices.GetAllPostsPaginated(page, size);
        if(posts.Success)
        {
            return Ok(new
            {
                Success = posts.Success,
                Message = posts.Message,
                Data = posts.Data
            });
        }
        return BadRequest(new
        {
            Success = posts.Success,
            Message = posts.Message,
            Data = posts.Data
        });
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetPostById(int id)
    {
        var data = await _postServices.GetPostById(id);
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
    public async Task<IActionResult> UpdatePost(int id, PostUpdateDto update)
    {
        var result = await _postServices.UpdatePost(id, update);
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
    public async Task<IActionResult> RemovePost(int id)
    {
        var result = await _postServices.RemovePost(id);
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
