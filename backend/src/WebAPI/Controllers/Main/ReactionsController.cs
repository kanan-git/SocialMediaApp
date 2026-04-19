using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using src.Business.Services.Abstract;
using src.Entities.DTOs.Reaction;

namespace src.WebAPI.Controllers.Main;

[Route("api/[controller]/[action]")]
[ApiController]
public class ReactionsController : ControllerBase
{
    private readonly IReactionServices _reactionServices;
    public ReactionsController(IReactionServices reactionServices)
    {
        _reactionServices = reactionServices;
    }

    [HttpPost]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> CreateNewReaction(ReactionCreateDto create)
    {
        var result = await _reactionServices.CreateNewReaction(create);
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
    public async Task<IActionResult> GetAllReactions()
    {
        var reactions = await _reactionServices.GetAllReactions();
        if(reactions.Success)
        {
            return Ok(new
            {
                Success = reactions.Success,
                Message = reactions.Message,
                Data = reactions.Data
            });
        }
        return BadRequest(new
        {
            Success = reactions.Success,
            Message = reactions.Message,
            Data = reactions.Data
        });
    }

    [HttpGet("{page}")]
    public async Task<IActionResult> GetAllReactionsPaginated(int page, int size)
    {
        var reactions = await _reactionServices.GetAllReactionsPaginated(page, size);
        if(reactions.Success)
        {
            return Ok(new
            {
                Success = reactions.Success,
                Message = reactions.Message,
                Data = reactions.Data
            });
        }
        return BadRequest(new
        {
            Success = reactions.Success,
            Message = reactions.Message,
            Data = reactions.Data
        });
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetReactionById(int id)
    {
        var data = await _reactionServices.GetReactionById(id);
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
    public async Task<IActionResult> UpdateReaction(int id, ReactionUpdateDto update)
    {
        var result = await _reactionServices.UpdateReaction(id, update);
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
    public async Task<IActionResult> RemoveReaction(int id)
    {
        var result = await _reactionServices.RemoveReaction(id);
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
