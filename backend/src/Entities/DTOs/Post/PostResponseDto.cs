namespace src.Entities.DTOs.Post;

public class PostResponseDto
{
    public string Text {get; set;}
    public string Visibility {get; set;}
    public int UserId {get; set;}
    public DateTime CreatedAt {get; set;}
    public DateTime UpdatedAt {get; set;}
}
