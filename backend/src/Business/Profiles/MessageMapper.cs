using AutoMapper;

using src.Entities.Concrete.Main;
using src.Entities.DTOs.Message;

namespace src.Business.Profiles;

public class MessageMapper : Profile
{
    public MessageMapper()
    {
        CreateMap<MessageCreateDto, Message>().ReverseMap();
        CreateMap<Message, MessageResponseDto>().ReverseMap();
        CreateMap<MessageUpdateDto, Message>().ReverseMap();
    }
}
