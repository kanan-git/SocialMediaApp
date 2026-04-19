using Microsoft.EntityFrameworkCore;

using src.DataAccessLayer.ContextDB.EntityFrameworkCore;
using src.DataAccessLayer.UnitOfWork.Abstract;
// using src.DataAccessLayer.Repositories.Abstract;
// using src.DataAccessLayer.Repositories.Concrete.EFCore;

namespace src.DataAccessLayer;

public static class ConfigurationServices
{
    public static IServiceCollection AddDataAccessLayerConfigs(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddScoped<IUnitOfWork, src.DataAccessLayer.UnitOfWork.Concrete.UnitOfWork>();
        services.AddDbContext<SocialMediaDbContext>(options =>
        {
            options.UseSqlServer(configuration.GetConnectionString("Default"));
        });
        return services;
    }
}
