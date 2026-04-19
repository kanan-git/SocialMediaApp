namespace src.Entities.DTOs.Comment;

public class CommentResponseDto
{
    public string Text {get; set;}
    public string Type {get; set;}
    public string Visibility {get; set;}
    public int UserId {get; set;}
    public int? PostId {get; set;}
    public int? TargetCommentId {get; set;}
    public DateTime CreatedAt {get; set;}
    public DateTime UpdatedAt {get; set;}
}
