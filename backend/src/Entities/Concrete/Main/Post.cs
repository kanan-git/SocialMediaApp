using src.Core.Utilities.Enums;
using src.Entities.Common;
using src.Entities.Concrete.Auth;

namespace src.Entities.Concrete.Main;

public class Post : BaseEntity
{
    // main
    public string Text {get; set;} = null!;
    public string Visibility {get; set;} = VisibilityType.Public.ToString();
    
    // relational
    public int UserId {get; set;}
    public AppUser User {get; set;} = null!;
    public ICollection<Media>? AttachedMediaFiles {get; set;} = new List<Media>(0);
    public ICollection<Comment>? Comments {get; set;} = new List<Comment>(0);
    public ICollection<Reaction>? Reactions {get; set;} = new List<Reaction>(0);
}
