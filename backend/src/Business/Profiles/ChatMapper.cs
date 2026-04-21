using AutoMapper;

using src.Entities.Concrete.Main;
using src.Entities.DTOs.Chat;

namespace src.Business.Profiles;

public class ChatMapper : Profile
{
    public ChatMapper()
    {
        CreateMap<ChatCreateDto, Chat>().ReverseMap();
        CreateMap<Chat, ChatResponseDto>().ReverseMap();
        CreateMap<ChatUpdateDto, Chat>().ReverseMap();
    }
}
