using src.Core.Utilities.Result.Abstract;
using src.Entities.DTOs.Chat;

namespace src.Business.Services.Abstract;

public interface IChatServices
{
    public Task<src.Core.Utilities.Result.Abstract.IResult> CreateNewChat(ChatCreateDto createDto);
    public Task<IDataResult<List<ChatResponseDto>>> GetAllChats();
    public Task<IDataResult<List<ChatResponseDto>>> GetAllChatsPaginated(int page, int size);
    public Task<IDataResult<ChatResponseDto>> GetChatById(int id);
    public Task<src.Core.Utilities.Result.Abstract.IResult> UpdateChat(int id, ChatUpdateDto updateDto);
    public Task<src.Core.Utilities.Result.Abstract.IResult> RemoveChat(int id);
}
