using AutoMapper;

using src.Entities.Concrete.Main;
using src.Entities.DTOs.Reaction;

namespace src.Business.Profiles;

public class ReactionMapper : Profile
{
    public ReactionMapper()
    {
        CreateMap<ReactionCreateDto, Reaction>().ReverseMap();
        CreateMap<Reaction, ReactionResponseDto>().ReverseMap();
        CreateMap<ReactionUpdateDto, Reaction>().ReverseMap();
    }
}
