using src.Core.Utilities.Result.Abstract;
using src.Entities.DTOs.Media;

namespace src.Business.Services.Abstract;

public interface IMediaServices
{
    public Task<src.Core.Utilities.Result.Abstract.IResult> CreateNewMedia(MediaCreateDto createDto);
    public Task<IDataResult<List<MediaResponseDto>>> GetAllMedias();
    public Task<IDataResult<List<MediaResponseDto>>> GetAllMediasPaginated(int page, int size);
    public Task<IDataResult<MediaResponseDto>> GetMediaById(int id);
    public Task<src.Core.Utilities.Result.Abstract.IResult> UpdateMedia(int id, MediaUpdateDto updateDto);
    public Task<src.Core.Utilities.Result.Abstract.IResult> RemoveMedia(int id);
}
