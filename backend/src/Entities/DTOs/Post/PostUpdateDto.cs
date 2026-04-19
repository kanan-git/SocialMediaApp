using src.Core.Utilities.Enums;

namespace src.Entities.DTOs.Post;

public class PostUpdateDto
{
    public string Text {get; set;} = null!;
    public string Visibility {get; set;} = VisibilityType.Public.ToString();
    public int UserId {get; set;}
    public DateTime UpdatedAt {get; set;} = DateTime.UtcNow;
}
