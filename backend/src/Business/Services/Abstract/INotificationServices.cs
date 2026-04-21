using src.Core.Utilities.Result.Abstract;
using src.Entities.DTOs.Notification;

namespace src.Business.Services.Abstract;

public interface INotificationServices
{
    public Task<src.Core.Utilities.Result.Abstract.IResult> CreateNewNotification(NotificationCreateDto createDto);
    public Task<IDataResult<List<NotificationResponseDto>>> GetAllNotifications();
    public Task<IDataResult<List<NotificationResponseDto>>> GetAllNotificationsPaginated(int page, int size);
    public Task<IDataResult<NotificationResponseDto>> GetNotificationById(int id);
    public Task<src.Core.Utilities.Result.Abstract.IResult> UpdateNotification(int id, NotificationUpdateDto updateDto);
    public Task<src.Core.Utilities.Result.Abstract.IResult> RemoveNotification(int id);
}
