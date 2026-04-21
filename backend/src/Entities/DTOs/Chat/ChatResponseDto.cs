namespace src.Entities.DTOs.Chat;

public class ChatResponseDto
{
    public string Type {get; set;} = null!;
    public DateTime CreatedAt {get; set;}
    public DateTime UpdatedAt {get; set;}
}
