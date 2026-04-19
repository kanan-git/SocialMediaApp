using src.Core.Utilities.Result.Abstract;
using src.Entities.DTOs.Reaction;

namespace src.Business.Services.Abstract;

public interface IReactionServices
{
    public Task<src.Core.Utilities.Result.Abstract.IResult> CreateNewReaction(ReactionCreateDto createDto);
    public Task<IDataResult<List<ReactionResponseDto>>> GetAllReactions();
    public Task<IDataResult<List<ReactionResponseDto>>> GetAllReactionsPaginated(int page, int size);
    public Task<IDataResult<ReactionResponseDto>> GetReactionById(int id);
    public Task<src.Core.Utilities.Result.Abstract.IResult> UpdateReaction(int id, ReactionUpdateDto updateDto);
    public Task<src.Core.Utilities.Result.Abstract.IResult> RemoveReaction(int id);
}
