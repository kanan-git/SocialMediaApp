using System.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using src.Core.Utilities.Enums;
using src.Entities.Concrete.Main;

namespace src.DataAccessLayer.Configurations;

public class ReactionConfigurations : IEntityTypeConfiguration<Reaction>
{
    public void Configure(EntityTypeBuilder<Reaction> builder)
    {
        // main
        builder.Property<int>("Id");
        builder.Property(r => r.Type)
            .HasMaxLength(8)
            .HasColumnType(SqlDbType.NVarChar.ToString())
            .HasDefaultValue(ReactionType.like.ToString());
        builder.Property(r => r.Target)
            .HasMaxLength(8)
            .HasColumnType(SqlDbType.NVarChar.ToString())
            .HasDefaultValue(ReactionTarget.post.ToString());
        builder.Property(r => r.UserId)
            .IsRequired();
        builder.Property(r => r.PostId);
        builder.Property(r => r.CommentId);

        // relational
        builder.HasOne(r => r.User)
            .WithMany(u => u.Reactions)
            .HasForeignKey(r => r.UserId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}
