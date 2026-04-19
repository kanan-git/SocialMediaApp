using AutoMapper;

using src.Entities.Concrete.Auth;
using src.Entities.DTOs.Authentication;

namespace src.Business.Profiles;

public class AuthMapper : Profile
{
    public AuthMapper()
    {
        CreateMap<LoginDto, AppUser>().ReverseMap();
        CreateMap<RegisterDto, AppUser>().ReverseMap();
    }
}
