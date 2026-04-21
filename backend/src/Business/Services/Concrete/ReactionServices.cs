using AutoMapper;

using src.Business.Services.Abstract;
using src.Core.Utilities.Constants;
using src.Core.Utilities.Result.Abstract;
using src.Core.Utilities.Result.Concrete;
using src.DataAccessLayer.UnitOfWork.Abstract;
using src.Entities.Concrete.Main;
using src.Entities.DTOs.Reaction;

namespace src.Business.Services.Concrete;

public class ReactionServices : IReactionServices
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    public ReactionServices(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }
    
    public async Task<src.Core.Utilities.Result.Abstract.IResult> CreateNewReaction(ReactionCreateDto createDto)
    {
        var reaction = _mapper.Map<Reaction>(createDto);
        await _unitOfWork.ReactionRepository.AddAsync(reaction);
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult(ResultMessages.Saved);
        }
        return new SuccessResult(ResultMessages.Created);
    }

    public async Task<IDataResult<List<ReactionResponseDto>>> GetAllReactions()
    {
        var reactions = await _unitOfWork.ReactionRepository.GetAllAsync();
        var result = _mapper.Map<List<ReactionResponseDto>>(reactions);
        if(result.Count == 0)
        {
            return new ErrorDataResult<List<ReactionResponseDto>>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<List<ReactionResponseDto>>(result);
    }

    public async Task<IDataResult<List<ReactionResponseDto>>> GetAllReactionsPaginated(int page, int size)
    {
        var reactions = await _unitOfWork.ReactionRepository.GetAllWithPaginateAsync(page, size);
        var result = _mapper.Map<List<ReactionResponseDto>>(reactions);
        if(result.Count == 0)
        {
            return new ErrorDataResult<List<ReactionResponseDto>>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<List<ReactionResponseDto>>(result);
    }

    public async Task<IDataResult<ReactionResponseDto>> GetReactionById(int id)
    {
        var reaction = await _unitOfWork.ReactionRepository.GetAsync(r => r.Id == id);
        var result = _mapper.Map<ReactionResponseDto>(reaction);
        if(result == null)
        {
            return new ErrorDataResult<ReactionResponseDto>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<ReactionResponseDto>(result);
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> UpdateReaction(int id, ReactionUpdateDto updateDto)
    {
        var reaction = await _unitOfWork.ReactionRepository.GetAsync(r => r.Id == id);
        if(reaction == null)
        {
            return new ErrorResult(ResultMessages.NoMatchFound);
        }
        _mapper.Map(updateDto, reaction);
        _unitOfWork.ReactionRepository.Update(reaction);
        await _unitOfWork.SaveAsync();
        return new SuccessResult(ResultMessages.Updated);
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> RemoveReaction(int id)
    {
        var delete = await _unitOfWork.ReactionRepository.GetAsync(r => r.Id == id);
        if(delete == null)
        {
            return new ErrorResult(ResultMessages.NoMatchFound);
        }
        _unitOfWork.ReactionRepository.Remove(delete);
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult(ResultMessages.Saved);
        }
        return new SuccessResult(ResultMessages.Removed);
    }
}
