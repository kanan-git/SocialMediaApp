using System.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using src.Core.Utilities.Enums;
using src.Entities.Concrete.Main;

namespace src.DataAccessLayer.Configurations;

public class PostConfigurations : IEntityTypeConfiguration<Post>
{
    public void Configure(EntityTypeBuilder<Post> builder)
    {
        // main
        builder.Property<int>("Id");
        builder.Property(p => p.Text)
            .HasMaxLength(255)
            .HasColumnType(SqlDbType.NVarChar.ToString())
            .IsRequired();
        builder.Property(p => p.Visibility)
            .HasMaxLength(8)
            .HasColumnType(SqlDbType.NVarChar.ToString())
            .HasDefaultValue(VisibilityType.Public.ToString());
        builder.Property(p => p.UserId)
            .IsRequired();

        // relational
        builder.HasOne(p => p.User)
            .WithMany(u => u.Posts)
            .HasForeignKey(p => p.UserId)
            .OnDelete(DeleteBehavior.Restrict);
        builder.HasMany(p => p.Reactions)
            .WithOne(r => r.Post)
            .HasForeignKey(r => r.PostId)
            .OnDelete(DeleteBehavior.Restrict);
        builder.HasMany(p => p.Hashtags)
            .WithMany(h => h.Posts);
    }
}
