using System.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using src.Core.Utilities.Enums;
using src.Entities.Concrete.Main;

namespace src.DataAccessLayer.Configurations;

public class MediaConfigurations : IEntityTypeConfiguration<Media>
{
    public void Configure(EntityTypeBuilder<Media> builder)
    {
        // main
        builder.Property<int>("Id");
        builder.Property(m => m.FileName)
            .HasMaxLength(255)
            .HasColumnType(SqlDbType.NVarChar.ToString())
            .IsRequired();
        builder.Property(m => m.FilePath)
            .HasMaxLength(255)
            .HasColumnType(SqlDbType.NVarChar.ToString())
            .IsRequired();
        builder.Property(m => m.FileType)
            .HasMaxLength(16)
            .HasColumnType(SqlDbType.NVarChar.ToString())
            .HasDefaultValue(MediaFileType.image.ToString());
        builder.Property(m => m.FileSize)
            .IsRequired();
        builder.Property(m => m.UserId)
            .IsRequired();
        builder.Property(m => m.PostId);

        // relational
        builder.HasOne(m => m.User)
            .WithMany(u => u.MediaFiles)
            .HasForeignKey(m => m.UserId)
            .OnDelete(DeleteBehavior.Restrict);
        builder.HasOne(m => m.Post)
            .WithMany(p => p.AttachedMediaFiles)
            .HasForeignKey(m => m.PostId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}
