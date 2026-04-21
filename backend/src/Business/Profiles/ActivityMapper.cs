using AutoMapper;

using src.Entities.Concrete.Main;
using src.Entities.DTOs.Activity;

namespace src.Business.Profiles;

public class ActivityMapper : Profile
{
    public ActivityMapper()
    {
        CreateMap<ActivityCreateDto, Activity>().ReverseMap();
        CreateMap<Activity, ActivityResponseDto>().ReverseMap();
        CreateMap<ActivityUpdateDto, Activity>().ReverseMap();
    }
}
