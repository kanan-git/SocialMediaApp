using src.Core.Utilities.Enums;
using src.Entities.Common;
using src.Entities.Concrete.Auth;

namespace src.Entities.Concrete.Main;

public class Reaction : BaseEntity
{
    // main
    public string Type {get; set;} = ReactionType.like.ToString();
    public string Target {get; set;} = ReactionTarget.post.ToString();

    // relational
    public int UserId {get; set;}
    public AppUser User {get; set;} = null!;
    public int? PostId {get; set;}
    public Post? Post {get; set;}
    public int? CommentId {get; set;}
    public Comment? Comment {get; set;}
}
