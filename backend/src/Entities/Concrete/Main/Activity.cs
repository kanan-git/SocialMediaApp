using src.Entities.Common;
using src.Entities.Concrete.Auth;

namespace src.Entities.Concrete.Main;

public class Activity : BaseEntity
{
    // main
    #region MAIN PROPERTIES
    public string Category {get; set;} = null!;
    public string? Description {get; set;}
    #endregion

    // relational
    #region RELATIONAL PROPERTIES
    public int UserId {get; set;}
    public AppUser User {get; set;} = null!;
    #endregion
}
