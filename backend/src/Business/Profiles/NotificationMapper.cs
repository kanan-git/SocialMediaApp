using AutoMapper;

using src.Entities.Concrete.Main;
using src.Entities.DTOs.Notification;

namespace src.Business.Profiles;

public class NotificationMapper : Profile
{
    public NotificationMapper()
    {
        CreateMap<NotificationCreateDto, Notification>().ReverseMap();
        CreateMap<Notification, NotificationResponseDto>().ReverseMap();
        CreateMap<NotificationUpdateDto, Notification>().ReverseMap();
    }
}
