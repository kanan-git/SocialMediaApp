using AutoMapper;

using src.Business.Services.Abstract;
using src.Core.Utilities.Constants;
using src.Core.Utilities.Result.Abstract;
using src.Core.Utilities.Result.Concrete;
using src.DataAccessLayer.UnitOfWork.Abstract;
using src.Entities.Concrete.Main;
using src.Entities.DTOs.Comment;

namespace src.Business.Services.Concrete;

public class CommentServices : ICommentServices
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    public CommentServices(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }
    
    public async Task<src.Core.Utilities.Result.Abstract.IResult> CreateNewComment(CommentCreateDto createDto)
    {
        var comment = _mapper.Map<Comment>(createDto);
        if(await _unitOfWork.CommentRepository.IsExistEntity(c => c.Text == comment.Text))
        {
            return new ErrorResult(ExceptionMessages.AlreadyExist);
        }
        await _unitOfWork.CommentRepository.AddAsync(comment);
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult("Saved.");
        }
        return new SuccessResult("Comment created successfully.");
    }

    public async Task<IDataResult<List<CommentResponseDto>>> GetAllComments()
    {
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
        var comments = await _unitOfWork.CommentRepository.GetAllWithPaginateAsync(page, size);
        var result = _mapper.Map<List<CommentResponseDto>>(comments);
        if(result.Count == 0)
        {
            return new ErrorDataResult<List<CommentResponseDto>>(result, "No result found!");
        }
        return new SuccessDataResult<List<CommentResponseDto>>(result);
    }

    public async Task<IDataResult<CommentResponseDto>> GetCommentById(int id)
    {
        var comment = await _unitOfWork.CommentRepository.GetAsync(c => c.Id == id);
        var result = _mapper.Map<CommentResponseDto>(comment);
        if(result == null)
        {
            return new ErrorDataResult<CommentResponseDto>(result, "No match found!");
        }
        return new SuccessDataResult<CommentResponseDto>(result);
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> UpdateComment(int id, CommentUpdateDto updateDto)
    {
        var comment = await _unitOfWork.CommentRepository.GetAsync(c => c.Id == id);
        if(comment == null)
        {
            return new ErrorResult("No match found!");
        }
        _mapper.Map(updateDto, comment);
        _unitOfWork.CommentRepository.Update(comment);
        await _unitOfWork.SaveAsync();
        return new SuccessResult("Updated successfully.");
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> RemoveComment(int id)
    {

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
        _unitOfWork.CommentRepository.Remove(delete);
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult("Saved.");
        }
        return new SuccessResult("Comment removed.");
    }
}
