namespace src.Entities.DTOs.Activity;

public class ActivityUpdateDto
{
    public string Category {get; set;} = null!;
    public string? Description {get; set;}
    public int UserId {get; set;}
    public DateTime UpdatedAt {get; set;} = DateTime.UtcNow;
}
