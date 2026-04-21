using System.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using src.Entities.Concrete.Main;

namespace src.DataAccessLayer.Configurations;

public class ChatConfigurations : IEntityTypeConfiguration<Chat>
{
    public void Configure(EntityTypeBuilder<Chat> builder)
    {
        // main
        builder.Property<int>("Id");
        builder.Property(c => c.Type)
            .HasMaxLength(32)
            .HasColumnType(SqlDbType.NVarChar.ToString())
            .IsRequired();

        // relational
        builder.HasMany(c => c.Participants)
            .WithMany(u => u.Chats);
    }
}
