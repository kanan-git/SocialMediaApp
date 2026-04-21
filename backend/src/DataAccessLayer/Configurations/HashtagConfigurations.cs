using System.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using src.Entities.Concrete.Main;

namespace src.DataAccessLayer.Configurations;

public class HashtagConfigurations : IEntityTypeConfiguration<Hashtag>
{
    public void Configure(EntityTypeBuilder<Hashtag> builder)
    {
        // main
        builder.Property<int>("Id");
        builder.Property(h => h.Category)
            .HasMaxLength(32)
            .HasColumnType(SqlDbType.NVarChar.ToString())
            .IsRequired();

        // relational
        builder.HasMany(h => h.Posts)
            .WithMany(p => p.Hashtags);
    }
}
