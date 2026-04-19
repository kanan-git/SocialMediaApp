using src.DataAccessLayer.Repositories.Abstract;

namespace src.DataAccessLayer.UnitOfWork.Abstract;

public interface IUnitOfWork
{
    public ICommentRepository CommentRepository {get;}
    public IMediaRepository MediaRepository {get;}
    public IPostRepository PostRepository {get;}
    public IReactionRepository ReactionRepository {get;}
    public Task<int> SaveAsync();
}
