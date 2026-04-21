using src.DataAccessLayer.Repositories.Abstract;

namespace src.DataAccessLayer.UnitOfWork.Abstract;

public interface IUnitOfWork
{
    public ICommentRepository CommentRepository {get;}
    public IMediaRepository MediaRepository {get;}
    public IPostRepository PostRepository {get;}
    public IReactionRepository ReactionRepository {get;}
    public IActivityRepository ActivityRepository {get;}
    public IChatRepository ChatRepository {get;}
    public ICityRepository CityRepository {get;}
    public ICountryRepository CountryRepository {get;}
    public IHashtagRepository HashtagRepository {get;}
    public IMessageRepository MessageRepository {get;}
    public INotificationRepository NotificationRepository {get;}
    public Task<int> SaveAsync();
}
