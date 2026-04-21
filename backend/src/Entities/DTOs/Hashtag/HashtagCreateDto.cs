namespace src.Entities.DTOs.Hashtag;

public class HashtagCreateDto
{
    public string Category {get; set;} = null!;
    public DateTime CreatedAt {get; set;} = DateTime.UtcNow;
    public DateTime UpdatedAt {get; set;} = DateTime.UtcNow;
}
