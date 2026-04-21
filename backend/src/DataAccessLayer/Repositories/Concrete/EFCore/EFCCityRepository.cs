using src.Core.DAL.Repositories.Concrete;
using src.DataAccessLayer.ContextDB.EntityFrameworkCore;
using src.DataAccessLayer.Repositories.Abstract;
using src.Entities.Concrete.Main;

namespace src.DataAccessLayer.Repositories.Concrete.EFCore;

public class EFCCityRepository : BaseRepository<City, SocialMediaDbContext>, ICityRepository
{
    public EFCCityRepository(SocialMediaDbContext context) : base(context)
    {}
}
