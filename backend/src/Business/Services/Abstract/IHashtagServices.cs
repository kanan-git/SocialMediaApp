using src.Core.Utilities.Result.Abstract;
using src.Entities.DTOs.Hashtag;

namespace src.Business.Services.Abstract;

public interface IHashtagServices
{
    public Task<src.Core.Utilities.Result.Abstract.IResult> CreateNewHashtag(HashtagCreateDto createDto);
    public Task<IDataResult<List<HashtagResponseDto>>> GetAllHashtags();
    public Task<IDataResult<List<HashtagResponseDto>>> GetAllHashtagsPaginated(int page, int size);
    public Task<IDataResult<HashtagResponseDto>> GetHashtagById(int id);
    public Task<src.Core.Utilities.Result.Abstract.IResult> UpdateHashtag(int id, HashtagUpdateDto updateDto);
    public Task<src.Core.Utilities.Result.Abstract.IResult> RemoveHashtag(int id);
}
