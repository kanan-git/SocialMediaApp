using src.Core.Utilities.Enums;

namespace src.Entities.DTOs.Comment;

public class CommentUpdateDto
{
    public string Text {get; set;} = null!;
    public string Type {get; set;} = CommentType.main.ToString();
    public string Visibility {get; set;} = VisibilityType.Public.ToString();
    public int UserId {get; set;}
    public int? PostId {get; set;}
    public int? TargetCommentId {get; set;}
    public DateTime UpdatedAt {get; set;} = DateTime.UtcNow;
}
