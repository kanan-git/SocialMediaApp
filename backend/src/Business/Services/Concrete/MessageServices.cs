using AutoMapper;

using src.Business.Services.Abstract;
using src.Core.Utilities.Constants;
using src.Core.Utilities.Result.Abstract;
using src.Core.Utilities.Result.Concrete;
using src.DataAccessLayer.UnitOfWork.Abstract;
using src.Entities.Concrete.Main;
using src.Entities.DTOs.Message;

namespace src.Business.Services.Concrete;

public class MessageServices : IMessageServices
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    public MessageServices(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }
    
    public async Task<src.Core.Utilities.Result.Abstract.IResult> CreateNewMessage(MessageCreateDto createDto)
    {
        var message = _mapper.Map<Message>(createDto);
        await _unitOfWork.MessageRepository.AddAsync(message);
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult(ResultMessages.Saved);
        }
        return new SuccessResult(ResultMessages.Created);
    }

    public async Task<IDataResult<List<MessageResponseDto>>> GetAllMessages()
    {
        var messages = await _unitOfWork.MessageRepository.GetAllAsync();
        var result = _mapper.Map<List<MessageResponseDto>>(messages);
        if(result.Count == 0)
        {
            return new ErrorDataResult<List<MessageResponseDto>>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<List<MessageResponseDto>>(result);
    }

    public async Task<IDataResult<List<MessageResponseDto>>> GetAllMessagesPaginated(int page, int size)
    {
        var messages = await _unitOfWork.MessageRepository.GetAllWithPaginateAsync(page, size);
        var result = _mapper.Map<List<MessageResponseDto>>(messages);
        if(result.Count == 0)
        {
            return new ErrorDataResult<List<MessageResponseDto>>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<List<MessageResponseDto>>(result);
    }

    public async Task<IDataResult<MessageResponseDto>> GetMessageById(int id)
    {
        var message = await _unitOfWork.MessageRepository.GetAsync(m => m.Id == id);
        var result = _mapper.Map<MessageResponseDto>(message);
        if(result == null)
        {
            return new ErrorDataResult<MessageResponseDto>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<MessageResponseDto>(result);
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> UpdateMessage(int id, MessageUpdateDto updateDto)
    {
        var message = await _unitOfWork.MessageRepository.GetAsync(m => m.Id == id);
        if(message == null)
        {
            return new ErrorResult(ResultMessages.NoMatchFound);
        }
        _mapper.Map(updateDto, message);
        _unitOfWork.MessageRepository.Update(message);
        await _unitOfWork.SaveAsync();
        return new SuccessResult(ResultMessages.Updated);
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> RemoveMessage(int id)
    {
        var delete = await _unitOfWork.MessageRepository.GetAsync(m => m.Id == id);
        if(delete == null)
        {
            return new ErrorResult(ResultMessages.NoMatchFound);
        }
        _unitOfWork.MessageRepository.Remove(delete);
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult(ResultMessages.Saved);
        }
        return new SuccessResult(ResultMessages.Removed);
    }
}
