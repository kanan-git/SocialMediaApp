using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using src.Business.Services.Abstract;
using src.Core.Utilities.Exceptions;
using src.Entities.DTOs.Hashtag;

namespace src.WebAPI.Controllers.Main;

[Route("api/[controller]/[action]")]
[ApiController]
public class HashtagsController : ControllerBase
{
    private readonly IHashtagServices _hashtagServices;
    public HashtagsController(IHashtagServices hashtagServices)
    {
        _hashtagServices = hashtagServices;
    }

    [HttpPost]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> CreateNewHashtag(HashtagCreateDto create)
    {
        var result = await _hashtagServices.CreateNewHashtag(create);
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
    public async Task<IActionResult> GetAllHashtags()
    {
        var hashtags = await _hashtagServices.GetAllHashtags();
        if(hashtags.Success)
        {
            return Ok(new
            {
                Success = hashtags.Success,
                Message = hashtags.Message,
                Data = hashtags.Data
            });
        }
        return BadRequest(new
        {
            Success = hashtags.Success,
            Message = hashtags.Message,
            Data = hashtags.Data
        });
    }

    [HttpGet("{page}")]
    public async Task<IActionResult> GetAllHashtagsPaginated(int page, int size)
    {
        var hashtags = await _hashtagServices.GetAllHashtagsPaginated(page, size);
        if(hashtags.Success)
        {
            return Ok(new
            {
                Success = hashtags.Success,
                Message = hashtags.Message,
                Data = hashtags.Data
            });
        }
        return BadRequest(new
        {
            Success = hashtags.Success,
            Message = hashtags.Message,
            Data = hashtags.Data
        });
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetHashtagById(int id)
    {
        var data = await _hashtagServices.GetHashtagById(id);
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
    public async Task<IActionResult> UpdateHashtag(int id, HashtagUpdateDto update)
    {
        var result = await _hashtagServices.UpdateHashtag(id, update);
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
    public async Task<IActionResult> RemoveHashtag(int id)
    {
        var result = await _hashtagServices.RemoveHashtag(id);
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
