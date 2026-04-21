using System.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using src.Entities.Concrete.Main;

namespace src.DataAccessLayer.Configurations;

public class ActivityConfigurations : IEntityTypeConfiguration<Activity>
{
    public void Configure(EntityTypeBuilder<Activity> builder)
    {
        // main
        builder.Property<int>("Id");
        builder.Property(a => a.Category)
            .HasMaxLength(32)
            .HasColumnType(SqlDbType.NVarChar.ToString())
            .IsRequired();
        builder.Property(a => a.Description)
            .HasMaxLength(255)
            .HasColumnType(SqlDbType.NVarChar.ToString());
        builder.Property(a => a.UserId)
            .IsRequired();

        // relational
        builder.HasOne(a => a.User)
            .WithMany(u => u.Activities)
            .HasForeignKey(a => a.UserId)
            .OnDelete(DeleteBehavior.NoAction);
    }
}
