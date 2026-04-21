using AutoMapper;

using src.Entities.Concrete.Main;
using src.Entities.DTOs.Country;

namespace src.Business.Profiles;

public class CountryMapper : Profile
{
    public CountryMapper()
    {
        CreateMap<CountryCreateDto, Country>().ReverseMap();
        CreateMap<Country, CountryResponseDto>().ReverseMap();
        CreateMap<CountryUpdateDto, Country>().ReverseMap();
    }
}
