using AutoMapper;

using src.Business.Services.Abstract;
using src.Core.Utilities.Constants;
using src.Core.Utilities.Result.Abstract;
using src.Core.Utilities.Result.Concrete;
using src.DataAccessLayer.UnitOfWork.Abstract;
using src.Entities.Concrete.Main;
using src.Entities.DTOs.Hashtag;

namespace src.Business.Services.Concrete;

public class HashtagServices : IHashtagServices
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    public HashtagServices(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }
    
    public async Task<src.Core.Utilities.Result.Abstract.IResult> CreateNewHashtag(HashtagCreateDto createDto)
    {
        var hashtag = _mapper.Map<Hashtag>(createDto);
        await _unitOfWork.HashtagRepository.AddAsync(hashtag);
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult(ResultMessages.Saved);
        }
        return new SuccessResult(ResultMessages.Created);
    }

    public async Task<IDataResult<List<HashtagResponseDto>>> GetAllHashtags()
    {
        var hashtags = await _unitOfWork.HashtagRepository.GetAllAsync();
        var result = _mapper.Map<List<HashtagResponseDto>>(hashtags);
        if(result.Count == 0)
        {
            return new ErrorDataResult<List<HashtagResponseDto>>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<List<HashtagResponseDto>>(result);
    }

    public async Task<IDataResult<List<HashtagResponseDto>>> GetAllHashtagsPaginated(int page, int size)
    {
        var hashtags = await _unitOfWork.HashtagRepository.GetAllWithPaginateAsync(page, size);
        var result = _mapper.Map<List<HashtagResponseDto>>(hashtags);
        if(result.Count == 0)
        {
            return new ErrorDataResult<List<HashtagResponseDto>>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<List<HashtagResponseDto>>(result);
    }

    public async Task<IDataResult<HashtagResponseDto>> GetHashtagById(int id)
    {
        var hashtag = await _unitOfWork.HashtagRepository.GetAsync(h => h.Id == id);
        var result = _mapper.Map<HashtagResponseDto>(hashtag);
        if(result == null)
        {
            return new ErrorDataResult<HashtagResponseDto>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<HashtagResponseDto>(result);
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> UpdateHashtag(int id, HashtagUpdateDto updateDto)
    {
        var hashtag = await _unitOfWork.HashtagRepository.GetAsync(h => h.Id == id);
        if(hashtag == null)
        {
            return new ErrorResult(ResultMessages.NoMatchFound);
        }
        _mapper.Map(updateDto, hashtag);
        _unitOfWork.HashtagRepository.Update(hashtag);
        await _unitOfWork.SaveAsync();
        return new SuccessResult(ResultMessages.Updated);
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> RemoveHashtag(int id)
    {
        var delete = await _unitOfWork.HashtagRepository.GetAsync(h => h.Id == id);
        if(delete == null)
        {
            return new ErrorResult(ResultMessages.NoMatchFound);
        }
        _unitOfWork.HashtagRepository.Remove(delete);
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult(ResultMessages.Saved);
        }
        return new SuccessResult(ResultMessages.Removed);
    }
}
