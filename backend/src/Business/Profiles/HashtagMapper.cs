using AutoMapper;

using src.Entities.Concrete.Main;
using src.Entities.DTOs.Hashtag;

namespace src.Business.Profiles;

public class HashtagMapper : Profile
{
    public HashtagMapper()
    {
        CreateMap<HashtagCreateDto, Hashtag>().ReverseMap();
        CreateMap<Hashtag, HashtagResponseDto>().ReverseMap();
        CreateMap<HashtagUpdateDto, Hashtag>().ReverseMap();
    }
}
