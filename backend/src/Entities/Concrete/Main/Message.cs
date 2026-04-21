using src.Entities.Common;
using src.Entities.Concrete.Auth;

namespace src.Entities.Concrete.Main;

public class Message : BaseEntity
{
    // main
    #region MAIN PROPERTIES
    public string Text {get; set;} = null!;
    public bool IsRead {get; set;} = false;
    #endregion

    // relational
    #region RELATIONAL PROPERTIES
    public int UserId {get; set;}
    public AppUser User {get; set;} = null!;
    public int ChatId {get; set;}
    public Chat Chat {get; set;} = null!;
    public int? AttachedMediaFileId {get; set;}
    public Media? AttachedMediaFile {get; set;}
    #endregion
}
