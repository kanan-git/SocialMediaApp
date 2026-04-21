using src.Core.Utilities.Enums;
using src.Entities.Common;
using src.Entities.Concrete.Auth;

namespace src.Entities.Concrete.Main;

public class Media : BaseEntity
{
    // main
    public string FileName {get; set;} = null!; // must include file extension on config or service somehow, image doesnt work, must be image.png or image.jpg
    public string FilePath {get; set;} = null!;
    public string FileType {get; set;} = MediaFileType.image.ToString();
    public long FileSize {get; set;}
    public bool IsProfileImage {get; set;}

    // relational
    public int UserId {get; set;}
    public AppUser User {get; set;} = null!;
    public int? PostId {get; set;}
    public Post? Post {get; set;}
    public int? ChatId {get; set;}
    public Chat? Chat {get; set;}
    public ICollection<Message> Messages {get; set;} = new List<Message>(0);
}
