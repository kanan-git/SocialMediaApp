using AutoMapper;

using src.Business.Services.Abstract;
using src.Core.Utilities.Constants;
using src.Core.Utilities.Exceptions;
using src.Core.Utilities.Result.Abstract;
using src.Core.Utilities.Result.Concrete;
// using src.DataAccessLayer.Repositories.Abstract;
using src.DataAccessLayer.UnitOfWork.Abstract;
using src.Entities.Concrete.Main;
using src.Entities.DTOs.Comment;

namespace src.Business.Services.Concrete;

public class CommentServices : ICommentServices
{
    // private readonly ICommentRepository _commentRepo;
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    // public CommentsController(ICommentRepository commentRepository, IMapper mapper)
    public CommentServices(IUnitOfWork unitOfWork, IMapper mapper)
    {
        // _commentRepo = commentRepository;
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }
    
    public async Task<src.Core.Utilities.Result.Abstract.IResult> CreateNewComment(CommentCreateDto createDto)
    {
        var comment = _mapper.Map<Comment>(createDto);
        if(await _unitOfWork.CommentRepository.IsExistEntity(c => c.Text == comment.Text))
        {
            // throw new AlreadyExistException();
            return new ErrorResult(ExceptionMessages.AlreadyExist);
        }
        // if(await _commentRepo.IsExistEntity(c => c.Text == create.Text))
        // {
        //     return BadRequest(new
        //     {
        //         Error = "This comment is exist!",
        //         Code = 400
        //     });
        // }
        // await _commentRepo.AddAsync(comment);
        // await _commentRepo.SaveAsync();
        await _unitOfWork.CommentRepository.AddAsync(comment);
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult("Saved.");
        }
        return new SuccessResult("Comment created successfully.");
        // return comment;
    }

    public async Task<IDataResult<List<CommentResponseDto>>> GetAllComments()
    {
        // return Ok(await _commentRepo.GetAllAsync(null, "x", "y"));
        // return Ok(await _commentRepo.GetAllAsync());
        var comments = await _unitOfWork.CommentRepository.GetAllAsync();
        var result = _mapper.Map<List<CommentResponseDto>>(comments);
        if(result.Count == 0)
        {
            return new ErrorDataResult<List<CommentResponseDto>>(result, "No result found!");
        }
        return new SuccessDataResult<List<CommentResponseDto>>(result);
    }

    public async Task<IDataResult<List<CommentResponseDto>>> GetAllCommentsPaginated(int page, int size)
    {
        // return Ok(await _commentRepo.GetAllWithPaginateAsync(page, size));
        var comments = await _unitOfWork.CommentRepository.GetAllWithPaginateAsync(page, size);
        // return _mapper.Map<List<CommentResponseDto>>(comments);
        var result = _mapper.Map<List<CommentResponseDto>>(comments);
        if(result.Count == 0)
        {
            return new ErrorDataResult<List<CommentResponseDto>>(result, "No result found!");
        }
        return new SuccessDataResult<List<CommentResponseDto>>(result);
    }

    public async Task<IDataResult<CommentResponseDto>> GetCommentById(int id)
    {
        // return Ok(await _commentRepo.GetAsync(c => c.Id == id));
        var comment = await _unitOfWork.CommentRepository.GetAsync(c => c.Id == id);
        // return _mapper.Map<CommentResponseDto>(comment);
        var result = _mapper.Map<CommentResponseDto>(comment);
        if(result == null)
        {
            return new ErrorDataResult<CommentResponseDto>(result, "No match found!");
        }
        return new SuccessDataResult<CommentResponseDto>(result);
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> UpdateComment(int id, CommentUpdateDto updateDto)
    {
        // var comment = await _commentRepo.GetAsync(c => c.Id == id);
        var comment = await _unitOfWork.CommentRepository.GetAsync(c => c.Id == id);
        if(comment == null)
        {
            return new ErrorResult("No match found!");
        }
        _mapper.Map(updateDto, comment);
        // _commentRepo.Update(comment);
        _unitOfWork.CommentRepository.Update(comment);
        // await _commentRepo.SaveAsync();
        await _unitOfWork.SaveAsync();
        return new SuccessResult("Updated successfully.");
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> RemoveComment(int id)
    {
        // Option instead self loop relation delete behavior (controlled cascade in code)
        // Manually handle:
        // public async Task DeleteComment(int id)
        // {
        //     var comment = await _context.Comments
        //         .Include(c => c.Replies)
        //         .FirstOrDefaultAsync(c => c.Id == id);
        //     DeleteRecursively(comment);
        //     await _context.SaveChangesAsync();
        // }
        // var delete = await _commentRepo.GetAsync(c => c.Id == id);

        var delete = await _unitOfWork.CommentRepository.GetAsync(c => c.Id == id);
        if(delete == null)
        {
            return new ErrorResult("Not found!");
        }
        var deleteReplies = await _unitOfWork.CommentRepository.GetAllAsync(c => c.TargetCommentId == id);
        if(deleteReplies.Count > 0)
        {
            foreach(var replyComment in deleteReplies)
            {
                _unitOfWork.CommentRepository.Remove(replyComment);
            }
        }
        var deleteReactions = await _unitOfWork.ReactionRepository.GetAllAsync(r => r.CommentId == id);
        if(deleteReactions.Count > 0)
        {
            foreach(var commentReaction in deleteReactions)
            {
                _unitOfWork.ReactionRepository.Remove(commentReaction);
            }
        }
        // _commentRepo.Remove(delete);
        _unitOfWork.CommentRepository.Remove(delete);
        // await _commentRepo.SaveAsync();
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult("Saved.");
        }
        return new SuccessResult("Comment removed.");
    }
}
