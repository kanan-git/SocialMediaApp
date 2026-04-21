using src.Core.Utilities.Result.Abstract;
using src.Entities.DTOs.Message;

namespace src.Business.Services.Abstract;

public interface IMessageServices
{
    public Task<src.Core.Utilities.Result.Abstract.IResult> CreateNewMessage(MessageCreateDto createDto);
    public Task<IDataResult<List<MessageResponseDto>>> GetAllMessages();
    public Task<IDataResult<List<MessageResponseDto>>> GetAllMessagesPaginated(int page, int size);
    public Task<IDataResult<MessageResponseDto>> GetMessageById(int id);
    public Task<src.Core.Utilities.Result.Abstract.IResult> UpdateMessage(int id, MessageUpdateDto updateDto);
    public Task<src.Core.Utilities.Result.Abstract.IResult> RemoveMessage(int id);
}
