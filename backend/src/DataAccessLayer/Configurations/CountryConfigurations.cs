using System.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using src.Entities.Concrete.Main;

namespace src.DataAccessLayer.Configurations;

public class CountryConfigurations : IEntityTypeConfiguration<Country>
{
    public void Configure(EntityTypeBuilder<Country> builder)
    {
        // main
        builder.Property<int>("Id");
        builder.Property(c => c.Name)
            .HasMaxLength(32)
            .HasColumnType(SqlDbType.NVarChar.ToString())
            .IsRequired();

        // relational
        builder.HasMany(c => c.People)
            .WithOne(u => u.Country)
            .HasForeignKey(u => u.CountryId)
            .OnDelete(DeleteBehavior.NoAction);
    }
}
