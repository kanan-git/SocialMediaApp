using src.Core.Utilities.Enums;
using src.Entities.Common;
using src.Entities.Concrete.Auth;

namespace src.Entities.Concrete.Main;

public class Comment : BaseEntity
{
    // main
    #region MAIN PROPERTIES
    public string Text {get; set;} = null!;
    public string Type {get; set;} = CommentType.main.ToString(); // business logic, if reply, cant accept reply, link to main commentid, on text, add selected reply sender user id @
    public string Visibility {get; set;} = VisibilityType.Public.ToString();
    #endregion

    // relational
    #region RELATIONAL PROPERTIES
    public int UserId {get; set;}
    public AppUser User {get; set;} = null!;
    public ICollection<Comment>? ReplyComments {get; set;} = new List<Comment>(0);
    public int? PostId {get; set;}
    public Post? Post {get; set;}
    public ICollection<Reaction>? Reactions {get; set;} = new List<Reaction>(0);
    public int? TargetCommentId {get; set;}
    public Comment? TargetComment {get; set;}
    #endregion
}
