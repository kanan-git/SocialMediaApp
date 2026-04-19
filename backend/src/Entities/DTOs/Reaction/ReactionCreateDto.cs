using src.Core.Utilities.Enums;

namespace src.Entities.DTOs.Reaction;

public class ReactionCreateDto
{
    public string Type {get; set;} = ReactionType.like.ToString();
    public string Target {get; set;} = ReactionTarget.post.ToString();
    public int UserId {get; set;}
    public int? PostId {get; set;}
    public int? CommentId {get; set;}
    public DateTime CreatedAt {get; set;} = DateTime.UtcNow;
    public DateTime UpdatedAt {get; set;} = DateTime.UtcNow;
}
