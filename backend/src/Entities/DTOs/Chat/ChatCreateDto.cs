namespace src.Entities.DTOs.Chat;

public class ChatCreateDto
{
    public string Type {get; set;} = null!;
    public DateTime CreatedAt {get; set;} = DateTime.UtcNow;
    public DateTime UpdatedAt {get; set;} = DateTime.UtcNow;
}
