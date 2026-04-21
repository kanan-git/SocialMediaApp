namespace src.Entities.DTOs.Country;

public class CountryUpdateDto
{
    public string Name {get; set;} = null!;
    public DateTime UpdatedAt {get; set;} = DateTime.UtcNow;
}
