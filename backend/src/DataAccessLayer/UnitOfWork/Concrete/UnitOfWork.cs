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
    public UnitOfWork(SocialMediaDbContext context)
    {
        _context = context;
    }

    public ICommentRepository CommentRepository => _commentRepo ?? new EFCCommentRepository(_context);
    public IMediaRepository MediaRepository => _mediaRepo ?? new EFCMediaRepository(_context);
    public IPostRepository PostRepository => _postRepo ?? new EFCPostRepository(_context);
    public IReactionRepository ReactionRepository => _reactionRepo ?? new EFCReactionRepository(_context);
    
    public async Task<int> SaveAsync()
    {
        return await _context.SaveChangesAsync();
    }
}
