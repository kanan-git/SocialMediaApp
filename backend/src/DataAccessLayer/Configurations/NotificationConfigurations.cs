using System.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using src.Entities.Concrete.Main;

namespace src.DataAccessLayer.Configurations;

public class NotificationConfigurations : IEntityTypeConfiguration<Notification>
{
    public void Configure(EntityTypeBuilder<Notification> builder)
    {
        // main
        builder.Property<int>("Id");
        builder.Property(n => n.Type)
            .HasMaxLength(32)
            .HasColumnType(SqlDbType.NVarChar.ToString())
            .IsRequired();
        builder.Property(n => n.Description)
            .HasMaxLength(255)
            .HasColumnType(SqlDbType.NVarChar.ToString());
        builder.Property(n => n.IsRead)
            .HasDefaultValue(false);
        builder.Property(n => n.ReceiverUserId)
            .IsRequired();

        // relational
        builder.HasOne(n => n.ReceiverUser)
            .WithMany(u => u.Notifications)
            .HasForeignKey(n => n.ReceiverUserId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
