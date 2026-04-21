using AutoMapper;

using src.Business.Services.Abstract;
using src.Core.Utilities.Constants;
using src.Core.Utilities.Result.Abstract;
using src.Core.Utilities.Result.Concrete;
using src.DataAccessLayer.UnitOfWork.Abstract;
using src.Entities.Concrete.Main;
using src.Entities.DTOs.Notification;

namespace src.Business.Services.Concrete;

public class NotificationServices : INotificationServices
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    public NotificationServices(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }
    
    public async Task<src.Core.Utilities.Result.Abstract.IResult> CreateNewNotification(NotificationCreateDto createDto)
    {
        var notification = _mapper.Map<Notification>(createDto);
        await _unitOfWork.NotificationRepository.AddAsync(notification);
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult(ResultMessages.Saved);
        }
        return new SuccessResult(ResultMessages.Created);
    }

    public async Task<IDataResult<List<NotificationResponseDto>>> GetAllNotifications()
    {
        var notifications = await _unitOfWork.NotificationRepository.GetAllAsync();
        var result = _mapper.Map<List<NotificationResponseDto>>(notifications);
        if(result.Count == 0)
        {
            return new ErrorDataResult<List<NotificationResponseDto>>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<List<NotificationResponseDto>>(result);
    }

    public async Task<IDataResult<List<NotificationResponseDto>>> GetAllNotificationsPaginated(int page, int size)
    {
        var notifications = await _unitOfWork.NotificationRepository.GetAllWithPaginateAsync(page, size);
        var result = _mapper.Map<List<NotificationResponseDto>>(notifications);
        if(result.Count == 0)
        {
            return new ErrorDataResult<List<NotificationResponseDto>>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<List<NotificationResponseDto>>(result);
    }

    public async Task<IDataResult<NotificationResponseDto>> GetNotificationById(int id)
    {
        var notification = await _unitOfWork.NotificationRepository.GetAsync(n => n.Id == id);
        var result = _mapper.Map<NotificationResponseDto>(notification);
        if(result == null)
        {
            return new ErrorDataResult<NotificationResponseDto>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<NotificationResponseDto>(result);
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> UpdateNotification(int id, NotificationUpdateDto updateDto)
    {
        var notification = await _unitOfWork.NotificationRepository.GetAsync(n => n.Id == id);
        if(notification == null)
        {
            return new ErrorResult(ResultMessages.NoMatchFound);
        }
        _mapper.Map(updateDto, notification);
        _unitOfWork.NotificationRepository.Update(notification);
        await _unitOfWork.SaveAsync();
        return new SuccessResult(ResultMessages.Updated);
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> RemoveNotification(int id)
    {
        var delete = await _unitOfWork.NotificationRepository.GetAsync(n => n.Id == id);
        if(delete == null)
        {
            return new ErrorResult(ResultMessages.NoMatchFound);
        }
        _unitOfWork.NotificationRepository.Remove(delete);
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult(ResultMessages.Saved);
        }
        return new SuccessResult(ResultMessages.Removed);
    }
}
