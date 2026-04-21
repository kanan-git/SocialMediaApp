namespace src.Entities.DTOs.Activity;

public class ActivityCreateDto
{
    public string Category {get; set;} = null!;
    public string? Description {get; set;}
    public int UserId {get; set;}
    public DateTime CreatedAt {get; set;} = DateTime.UtcNow;
    public DateTime UpdatedAt {get; set;} = DateTime.UtcNow;
}
