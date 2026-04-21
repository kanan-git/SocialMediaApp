namespace src.Entities.DTOs.Hashtag;

public class HashtagUpdateDto
{
    public string Category {get; set;} = null!;
    public DateTime UpdatedAt {get; set;} = DateTime.UtcNow;
}
