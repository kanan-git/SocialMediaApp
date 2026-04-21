namespace src.Entities.DTOs.Chat;

public class ChatUpdateDto
{
    public string Type {get; set;} = null!;
    public DateTime UpdatedAt {get; set;} = DateTime.UtcNow;
}
