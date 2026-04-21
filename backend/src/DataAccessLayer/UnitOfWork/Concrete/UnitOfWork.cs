using src.DataAccessLayer.ContextDB.EntityFrameworkCore;
using src.DataAccessLayer.Repositories.Abstract;
using src.DataAccessLayer.Repositories.Concrete.EFCore;
using src.DataAccessLayer.UnitOfWork.Abstract;

namespace src.DataAccessLayer.UnitOfWork.Concrete;

public class UnitOfWork : IUnitOfWork
{
    private readonly SocialMediaDbContext _context;
    private readonly ICommentRepository _commentRepo;
    private readonly IMediaRepository _mediaRepo;
    private readonly IPostRepository _postRepo;
    private readonly IReactionRepository _reactionRepo;
    private readonly IActivityRepository _activityRepo;
    private readonly IChatRepository _chatRepo;
    private readonly ICityRepository _cityRepo;
    private readonly ICountryRepository _countryRepo;
    private readonly IHashtagRepository _hashtagRepo;
    private readonly IMessageRepository _messageRepo;
    private readonly INotificationRepository _notificationRepo;
    public UnitOfWork(SocialMediaDbContext context)
    {
        _context = context;
    }

    public ICommentRepository CommentRepository => _commentRepo ?? new EFCCommentRepository(_context);
    public IMediaRepository MediaRepository => _mediaRepo ?? new EFCMediaRepository(_context);
    public IPostRepository PostRepository => _postRepo ?? new EFCPostRepository(_context);
    public IReactionRepository ReactionRepository => _reactionRepo ?? new EFCReactionRepository(_context);
    public IActivityRepository ActivityRepository => _activityRepo ?? new EFCActivityRepository(_context);
    public IChatRepository ChatRepository => _chatRepo ?? new EFCChatRepository(_context);
    public ICityRepository CityRepository => _cityRepo ?? new EFCCityRepository(_context);
    public ICountryRepository CountryRepository => _countryRepo ?? new EFCCountryRepository(_context);
    public IHashtagRepository HashtagRepository => _hashtagRepo ?? new EFCHashtagRepository(_context);
    public IMessageRepository MessageRepository => _messageRepo ?? new EFCMessageRepository(_context);
    public INotificationRepository NotificationRepository => _notificationRepo ?? new EFCNotificationRepository(_context);

    public async Task<int> SaveAsync()
    {
        return await _context.SaveChangesAsync();
    }
}
