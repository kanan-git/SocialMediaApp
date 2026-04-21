using src.Core.Utilities.Result.Abstract;
using src.Entities.DTOs.Activity;

namespace src.Business.Services.Abstract;

public interface IActivityServices
{
    public Task<src.Core.Utilities.Result.Abstract.IResult> CreateNewActivity(ActivityCreateDto createDto);
    public Task<IDataResult<List<ActivityResponseDto>>> GetAllActivities();
    public Task<IDataResult<List<ActivityResponseDto>>> GetAllActivitiesPaginated(int page, int size);
    public Task<IDataResult<ActivityResponseDto>> GetActivityById(int id);
    public Task<src.Core.Utilities.Result.Abstract.IResult> UpdateActivity(int id, ActivityUpdateDto updateDto);
    public Task<src.Core.Utilities.Result.Abstract.IResult> RemoveActivity(int id);
}
