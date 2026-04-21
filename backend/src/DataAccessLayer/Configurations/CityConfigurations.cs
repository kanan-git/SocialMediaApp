using System.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using src.Entities.Concrete.Main;

namespace src.DataAccessLayer.Configurations;

public class CityConfigurations : IEntityTypeConfiguration<City>
{
    public void Configure(EntityTypeBuilder<City> builder)
    {
        // main
        builder.Property<int>("Id");
        builder.Property(c => c.Name)
            .HasMaxLength(32)
            .HasColumnType(SqlDbType.NVarChar.ToString())
            .IsRequired();
        builder.Property(c => c.CountryId)
            .IsRequired();

        // relational
        builder.HasOne(ci => ci.Country)
            .WithMany(co => co.Cities)
            .HasForeignKey(ci => ci.CountryId)
            .OnDelete(DeleteBehavior.Cascade);
        builder.HasMany(c => c.People)
            .WithOne(u => u.City)
            .HasForeignKey(u => u.CityId)
            .OnDelete(DeleteBehavior.SetNull);
    }
}
