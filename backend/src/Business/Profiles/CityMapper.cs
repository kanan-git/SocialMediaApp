using AutoMapper;

using src.Entities.Concrete.Main;
using src.Entities.DTOs.City;

namespace src.Business.Profiles;

public class CityMapper : Profile
{
    public CityMapper()
    {
        CreateMap<CityCreateDto, City>().ReverseMap();
        CreateMap<City, CityResponseDto>()
            .ForMember(ci => ci.CountryName, opt => opt.MapFrom(co => co.Country.Name))
            .ReverseMap();
        CreateMap<CityUpdateDto, City>().ReverseMap();
    }
}
