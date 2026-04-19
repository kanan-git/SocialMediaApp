using src.Core.DAL.Repositories.Concrete;
using src.DataAccessLayer.ContextDB.EntityFrameworkCore;
using src.DataAccessLayer.Repositories.Abstract;
using src.Entities.Concrete.Main;

namespace src.DataAccessLayer.Repositories.Concrete.EFCore;

public class EFCReactionRepository : BaseRepository<Reaction, SocialMediaDbContext>, IReactionRepository
{
    public EFCReactionRepository(SocialMediaDbContext context) : base(context)
    {
    }
}
