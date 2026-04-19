using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using src.Business.Services.Abstract;
using src.Core.Utilities.Exceptions;
using src.Entities.DTOs.Comment;

namespace src.WebAPI.Controllers.Main;

[Route("api/[controller]/[action]")]
[ApiController]
public class CommentsController : ControllerBase
{
    private readonly ICommentServices _commentServices;
    public CommentsController(ICommentServices commentServices)
    {
        _commentServices = commentServices;
    }

    [HttpPost]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> CreateNewComment(CommentCreateDto create)
    {
        var result = await _commentServices.CreateNewComment(create);
        // try
        // {}
        // catch(Exception anyException)
        // {
        //     return BadRequest(anyException);
        // }
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
    public async Task<IActionResult> GetAllComments()
    {
        var comments = await _commentServices.GetAllComments();
        if(comments.Success)
        {
            return Ok(new
            {
                Success = comments.Success,
                Message = comments.Message,
                Data = comments.Data
            });
        }
        return BadRequest(new
        {
            Success = comments.Success,
            Message = comments.Message,
            Data = comments.Data
        });
    }

    [HttpGet("{page}")]
    public async Task<IActionResult> GetAllCommentsPaginated(int page, int size)
    {
        var comments = await _commentServices.GetAllCommentsPaginated(page, size);
        if(comments.Success)
        {
            return Ok(new
            {
                Success = comments.Success,
                Message = comments.Message,
                Data = comments.Data
            });
        }
        return BadRequest(new
        {
            Success = comments.Success,
            Message = comments.Message,
            Data = comments.Data
        });
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetCommentById(int id)
    {
        var data = await _commentServices.GetCommentById(id);
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
    public async Task<IActionResult> UpdateComment(int id, CommentUpdateDto update)
    {
        var result = await _commentServices.UpdateComment(id, update);
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
    public async Task<IActionResult> RemoveComment(int id)
    {
        var result = await _commentServices.RemoveComment(id);
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
