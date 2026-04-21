namespace src.Entities.DTOs.City;

public class CityCreateDto
{
    public string Name {get; set;} = null!;
    public int CountryId {get; set;}
    public DateTime CreatedAt {get; set;} = DateTime.UtcNow;
    public DateTime UpdatedAt {get; set;} = DateTime.UtcNow;
}
