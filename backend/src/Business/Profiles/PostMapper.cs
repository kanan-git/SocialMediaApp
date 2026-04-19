using AutoMapper;

using src.Entities.Concrete.Main;
using src.Entities.DTOs.Post;

namespace src.Business.Profiles;

public class PostMapper : Profile
{
    public PostMapper()
    {
        CreateMap<PostCreateDto, Post>().ReverseMap();
        CreateMap<Post, PostResponseDto>().ReverseMap();
        CreateMap<PostUpdateDto, Post>().ReverseMap();
    }
}
