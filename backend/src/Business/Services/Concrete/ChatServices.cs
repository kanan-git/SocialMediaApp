using AutoMapper;

using src.Business.Services.Abstract;
using src.Core.Utilities.Constants;
using src.Core.Utilities.Result.Abstract;
using src.Core.Utilities.Result.Concrete;
using src.DataAccessLayer.UnitOfWork.Abstract;
using src.Entities.Concrete.Main;
using src.Entities.DTOs.Chat;

namespace src.Business.Services.Concrete;

public class ChatServices : IChatServices
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    public ChatServices(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }
    
    public async Task<src.Core.Utilities.Result.Abstract.IResult> CreateNewChat(ChatCreateDto createDto)
    {
        var chat = _mapper.Map<Chat>(createDto);
        await _unitOfWork.ChatRepository.AddAsync(chat);
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult(ResultMessages.Saved);
        }
        return new SuccessResult(ResultMessages.Created);
    }

    public async Task<IDataResult<List<ChatResponseDto>>> GetAllChats()
    {
        var chats = await _unitOfWork.ChatRepository.GetAllAsync();
        var result = _mapper.Map<List<ChatResponseDto>>(chats);
        if(result.Count == 0)
        {
            return new ErrorDataResult<List<ChatResponseDto>>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<List<ChatResponseDto>>(result);
    }

    public async Task<IDataResult<List<ChatResponseDto>>> GetAllChatsPaginated(int page, int size)
    {
        var chats = await _unitOfWork.ChatRepository.GetAllWithPaginateAsync(page, size);
        var result = _mapper.Map<List<ChatResponseDto>>(chats);
        if(result.Count == 0)
        {
            return new ErrorDataResult<List<ChatResponseDto>>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<List<ChatResponseDto>>(result);
    }

    public async Task<IDataResult<ChatResponseDto>> GetChatById(int id)
    {
        var chat = await _unitOfWork.ChatRepository.GetAsync(c => c.Id == id);
        var result = _mapper.Map<ChatResponseDto>(chat);
        if(result == null)
        {
            return new ErrorDataResult<ChatResponseDto>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<ChatResponseDto>(result);
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> UpdateChat(int id, ChatUpdateDto updateDto)
    {
        var chat = await _unitOfWork.ChatRepository.GetAsync(c => c.Id == id);
        if(chat == null)
        {
            return new ErrorResult(ResultMessages.NoMatchFound);
        }
        _mapper.Map(updateDto, chat);
        _unitOfWork.ChatRepository.Update(chat);
        await _unitOfWork.SaveAsync();
        return new SuccessResult(ResultMessages.Updated);
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> RemoveChat(int id)
    {
        var delete = await _unitOfWork.ChatRepository.GetAsync(c => c.Id == id);
        if(delete == null)
        {
            return new ErrorResult(ResultMessages.NoMatchFound);
        }
        _unitOfWork.ChatRepository.Remove(delete);
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult(ResultMessages.Saved);
        }
        return new SuccessResult(ResultMessages.Removed);
    }
}
