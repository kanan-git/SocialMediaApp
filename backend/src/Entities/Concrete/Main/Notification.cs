using src.Entities.Common;
using src.Entities.Concrete.Auth;

namespace src.Entities.Concrete.Main;

public class Notification : BaseEntity
{
    // main
    #region MAIN PROPERTIES
    public string Type {get; set;} = null!;
    public string? Description {get; set;}
    public bool IsRead {get; set;} = false;
    #endregion

    // relational
    #region RELATIONAL PROPERTIES
    public int ReceiverUserId {get; set;}
    public AppUser ReceiverUser {get; set;} = null!;
    #endregion
}
