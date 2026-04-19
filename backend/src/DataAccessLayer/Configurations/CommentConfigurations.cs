using System.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using src.Core.Utilities.Enums;
using src.Entities.Concrete.Main;

namespace src.DataAccessLayer.Configurations;

public class CommentConfigurations : IEntityTypeConfiguration<Comment>
{
    public void Configure(EntityTypeBuilder<Comment> builder)
    {
        // main
        builder.Property<int>("Id");
        builder.Property(c => c.Text)
            .HasMaxLength(255)
            .HasColumnType(SqlDbType.NVarChar.ToString())
            .IsRequired();
        builder.Property(c => c.Type)
            .HasMaxLength(8)
            .HasColumnType(SqlDbType.NVarChar.ToString())
            .HasDefaultValue(CommentType.main.ToString());
        builder.Property(c => c.Visibility)
            .HasMaxLength(8)
            .HasColumnType(SqlDbType.NVarChar.ToString())
            .HasDefaultValue(VisibilityType.Public.ToString());
        builder.Property(c => c.UserId)
            .IsRequired();
        builder.Property(c => c.PostId);
        builder.Property(c => c.TargetCommentId);

        // relational
        builder.HasOne(c => c.User)
            .WithMany(u => u.Comments)
            .HasForeignKey(c => c.UserId)
            .OnDelete(DeleteBehavior.Restrict); // SetNull Restrict Cascade NoAction
        builder.HasOne(c => c.Post)
            .WithMany(p => p.Comments)
            .HasForeignKey(c => c.PostId)
            .OnDelete(DeleteBehavior.Restrict);
        builder.HasMany(c => c.Reactions)
            .WithOne(r => r.Comment)
            .HasForeignKey(r => r.CommentId)
            .OnDelete(DeleteBehavior.NoAction);
        builder.HasOne(c => c.TargetComment)
            .WithMany()
            .HasForeignKey(c => c.TargetCommentId)
            .OnDelete(DeleteBehavior.NoAction);
    }
}
