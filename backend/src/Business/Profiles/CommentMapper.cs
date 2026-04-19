using AutoMapper;

using src.Entities.Concrete.Main;
using src.Entities.DTOs.Comment;

namespace src.Business.Profiles;

public class CommentMapper : Profile
{
    public CommentMapper()
    {
        CreateMap<CommentCreateDto, Comment>()
            .ForMember(c => c.Text, options => options.MapFrom(c => c.Text)).ReverseMap();
        CreateMap<Comment, CommentResponseDto>().ReverseMap();
        CreateMap<CommentUpdateDto, Comment>().ReverseMap();
    }
}
