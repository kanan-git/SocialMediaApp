using AutoMapper;

using src.Business.Services.Abstract;
using src.Core.Utilities.Constants;
using src.Core.Utilities.Result.Abstract;
using src.Core.Utilities.Result.Concrete;
using src.DataAccessLayer.UnitOfWork.Abstract;
using src.Entities.Concrete.Main;
using src.Entities.DTOs.Activity;

namespace src.Business.Services.Concrete;

public class ActivityServices : IActivityServices
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    public ActivityServices(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }
    
    public async Task<src.Core.Utilities.Result.Abstract.IResult> CreateNewActivity(ActivityCreateDto createDto)
    {
        var activity = _mapper.Map<Activity>(createDto);
        await _unitOfWork.ActivityRepository.AddAsync(activity);
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult(ResultMessages.Saved);
        }
        return new SuccessResult(ResultMessages.Created);
    }

    public async Task<IDataResult<List<ActivityResponseDto>>> GetAllActivities()
    {
        var activities = await _unitOfWork.ActivityRepository.GetAllAsync();
        var result = _mapper.Map<List<ActivityResponseDto>>(activities);
        if(result.Count == 0)
        {
            return new ErrorDataResult<List<ActivityResponseDto>>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<List<ActivityResponseDto>>(result);
    }

    public async Task<IDataResult<List<ActivityResponseDto>>> GetAllActivitiesPaginated(int page, int size)
    {
        var activities = await _unitOfWork.ActivityRepository.GetAllWithPaginateAsync(page, size);
        var result = _mapper.Map<List<ActivityResponseDto>>(activities);
        if(result.Count == 0)
        {
            return new ErrorDataResult<List<ActivityResponseDto>>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<List<ActivityResponseDto>>(result);
    }

    public async Task<IDataResult<ActivityResponseDto>> GetActivityById(int id)
    {
        var activity = await _unitOfWork.ActivityRepository.GetAsync(a => a.Id == id);
        var result = _mapper.Map<ActivityResponseDto>(activity);
        if(result == null)
        {
            return new ErrorDataResult<ActivityResponseDto>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<ActivityResponseDto>(result);
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> UpdateActivity(int id, ActivityUpdateDto updateDto)
    {
        var activity = await _unitOfWork.ActivityRepository.GetAsync(a => a.Id == id);
        if(activity == null)
        {
            return new ErrorResult(ResultMessages.NoMatchFound);
        }
        _mapper.Map(updateDto, activity);
        _unitOfWork.ActivityRepository.Update(activity);
        await _unitOfWork.SaveAsync();
        return new SuccessResult(ResultMessages.Updated);
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> RemoveActivity(int id)
    {
        var delete = await _unitOfWork.ActivityRepository.GetAsync(a => a.Id == id);
        if(delete == null)
        {
            return new ErrorResult(ResultMessages.NoMatchFound);
        }
        _unitOfWork.ActivityRepository.Remove(delete);
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult(ResultMessages.Saved);
        }
        return new SuccessResult(ResultMessages.Removed);
    }
}
