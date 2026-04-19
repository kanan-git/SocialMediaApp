using src.Core.Utilities.Result.Abstract;
using src.Entities.DTOs.Post;

namespace src.Business.Services.Abstract;

public interface IPostServices
{
    public Task<src.Core.Utilities.Result.Abstract.IResult> CreateNewPost(PostCreateDto createDto);
    public Task<IDataResult<List<PostResponseDto>>> GetAllPosts();
    public Task<IDataResult<List<PostResponseDto>>> GetAllPostsPaginated(int page, int size);
    public Task<IDataResult<PostResponseDto>> GetPostById(int id);
    public Task<src.Core.Utilities.Result.Abstract.IResult> UpdatePost(int id, PostUpdateDto updateDto);
    public Task<src.Core.Utilities.Result.Abstract.IResult> RemovePost(int id);
}
