namespace src.Entities.DTOs.City;

public class CityUpdateDto
{
    public string Name {get; set;} = null!;
    public int CountryId {get; set;}
    public DateTime UpdatedAt {get; set;} = DateTime.UtcNow;
}
