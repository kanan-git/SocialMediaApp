using src.Core.DAL.Repositories.Concrete;
using src.DataAccessLayer.ContextDB.EntityFrameworkCore;
using src.DataAccessLayer.Repositories.Abstract;
using src.Entities.Concrete.Main;

namespace src.DataAccessLayer.Repositories.Concrete.EFCore;

public class EFCActivityRepository : BaseRepository<Activity, SocialMediaDbContext>, IActivityRepository
{
    public EFCActivityRepository(SocialMediaDbContext context) : base(context)
    {}
}
