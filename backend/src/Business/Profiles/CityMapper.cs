using AutoMapper;

using src.Entities.Concrete.Main;
using src.Entities.DTOs.City;

namespace src.Business.Profiles;

public class CityMapper : Profile
{
    public CityMapper()
    {
        CreateMap<CityCreateDto, City>().ReverseMap();
        CreateMap<City, CityResponseDto>().ReverseMap();
        CreateMap<CityUpdateDto, City>().ReverseMap();
    }
}
