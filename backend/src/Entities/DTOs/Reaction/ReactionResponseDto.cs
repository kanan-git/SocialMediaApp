namespace src.Entities.DTOs.Reaction;

public class ReactionResponseDto
{
    public string Type {get; set;}
    public string Target {get; set;}
    public int UserId {get; set;}
    public int? PostId {get; set;}
    public int? CommentId {get; set;}
    public DateTime CreatedAt {get; set;}
    public DateTime UpdatedAt {get; set;}
}
