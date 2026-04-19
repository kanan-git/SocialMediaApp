using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

using src.Entities.Concrete.Auth;
using src.Entities.Concrete.Main;

namespace src.DataAccessLayer.ContextDB.EntityFrameworkCore;

public class SocialMediaDbContext : IdentityDbContext<AppUser, IdentityRole<int>, int>
{
    public SocialMediaDbContext(DbContextOptions options) : base(options)
    {}

    public DbSet<Comment> Comments {get; set;}
    public DbSet<Post> Posts {get; set;}
    public DbSet<Reaction> Reactions {get; set;}

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        base.OnModelCreating(builder);
    }
}
