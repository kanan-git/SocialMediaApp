namespace src.Entities.DTOs.Country;

public class CountryCreateDto
{
    public string Name {get; set;} = null!;
    public DateTime CreatedAt {get; set;} = DateTime.UtcNow;
    public DateTime UpdatedAt {get; set;} = DateTime.UtcNow;
}
