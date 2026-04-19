using src.Core.Utilities.Enums;

namespace src.Entities.DTOs.Post;

public class PostCreateDto
{
    public string Text {get; set;} = null!;
    public string Visibility {get; set;} = VisibilityType.Public.ToString();
    public int UserId {get; set;}
    public DateTime CreatedAt {get; set;} = DateTime.UtcNow;
    public DateTime UpdatedAt {get; set;} = DateTime.UtcNow;
}
