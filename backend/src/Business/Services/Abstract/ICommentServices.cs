using src.Core.Utilities.Result.Abstract;
using src.Entities.DTOs.Comment;

namespace src.Business.Services.Abstract;

public interface ICommentServices
{
    public Task<src.Core.Utilities.Result.Abstract.IResult> CreateNewComment(CommentCreateDto createDto);
    public Task<IDataResult<List<CommentResponseDto>>> GetAllComments();
    public Task<IDataResult<List<CommentResponseDto>>> GetAllCommentsPaginated(int page, int size);
    public Task<IDataResult<CommentResponseDto>> GetCommentById(int id);
    public Task<src.Core.Utilities.Result.Abstract.IResult> UpdateComment(int id, CommentUpdateDto updateDto);
    public Task<src.Core.Utilities.Result.Abstract.IResult> RemoveComment(int id);
}
