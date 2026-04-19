using AutoMapper;

using src.Entities.Concrete.Main;
using src.Entities.DTOs.Media;

namespace src.Business.Profiles;

public class MediaMapper : Profile
{
    public MediaMapper()
    {
        CreateMap<MediaCreateDto, Media>().ReverseMap();
        CreateMap<Media, MediaResponseDto>().ReverseMap();
        CreateMap<MediaUpdateDto, Media>().ReverseMap();
    }
}
