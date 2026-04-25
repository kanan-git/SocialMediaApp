namespace src.Entities.DTOs.City;

public class CityResponseDto
{
    public string Name {get; set;} = null!;
    public int CountryId {get; set;}
    public string? CountryName {get; set;}
    public DateTime CreatedAt {get; set;}
    public DateTime UpdatedAt {get; set;}
}
