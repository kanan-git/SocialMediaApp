using AutoMapper;

using src.Business.Services.Abstract;
using src.Core.Utilities.Constants;
using src.Core.Utilities.Result.Abstract;
using src.Core.Utilities.Result.Concrete;
using src.DataAccessLayer.UnitOfWork.Abstract;
using src.Entities.Concrete.Main;
using src.Entities.DTOs.Post;

namespace src.Business.Services.Concrete;

public class PostServices : IPostServices
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    public PostServices(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }
    
    public async Task<src.Core.Utilities.Result.Abstract.IResult> CreateNewPost(PostCreateDto createDto)
    {
        var post = _mapper.Map<Post>(createDto);
        if(await _unitOfWork.PostRepository.IsExistEntity(p => p.Text == post.Text))
        {
            return new ErrorResult(ResultMessages.AlreadyExist);
        }
        await _unitOfWork.PostRepository.AddAsync(post);
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult(ResultMessages.Saved);
        }
        return new SuccessResult(ResultMessages.Created);
    }

    public async Task<IDataResult<List<PostResponseDto>>> GetAllPosts()
    {
        var posts = await _unitOfWork.PostRepository.GetAllAsync();
        var result = _mapper.Map<List<PostResponseDto>>(posts);
        if(result.Count == 0)
        {
            return new ErrorDataResult<List<PostResponseDto>>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<List<PostResponseDto>>(result);
    }

    public async Task<IDataResult<List<PostResponseDto>>> GetAllPostsPaginated(int page, int size)
    {
        var posts = await _unitOfWork.PostRepository.GetAllWithPaginateAsync(page, size);
        var result = _mapper.Map<List<PostResponseDto>>(posts);
        if(result.Count == 0)
        {
            return new ErrorDataResult<List<PostResponseDto>>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<List<PostResponseDto>>(result);
    }

    public async Task<IDataResult<PostResponseDto>> GetPostById(int id)
    {
        var post = await _unitOfWork.PostRepository.GetAsync(p => p.Id == id);
        var result = _mapper.Map<PostResponseDto>(post);
        if(result == null)
        {
            return new ErrorDataResult<PostResponseDto>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<PostResponseDto>(result);
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> UpdatePost(int id, PostUpdateDto updateDto)
    {
        var post = await _unitOfWork.PostRepository.GetAsync(p => p.Id == id);
        if(post == null)
        {
            return new ErrorResult(ResultMessages.NoMatchFound);
        }
        _mapper.Map(updateDto, post);
        _unitOfWork.PostRepository.Update(post);
        await _unitOfWork.SaveAsync();
        return new SuccessResult(ResultMessages.Updated);
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> RemovePost(int id)
    {
        var delete = await _unitOfWork.PostRepository.GetAsync(p => p.Id == id);
        if(delete == null)
        {
            return new ErrorResult(ResultMessages.NoMatchFound);
        }
        _unitOfWork.PostRepository.Remove(delete);
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult(ResultMessages.Saved);
        }
        return new SuccessResult(ResultMessages.Removed);
    }
}
