using src.Entities.Common;
using src.Entities.Concrete.Auth;

namespace src.Entities.Concrete.Main;

public class City : BaseEntity
{
    // main
    #region MAIN PROPERTIES
    public string Name {get; set;} = null!;
    #endregion

    // relational
    #region RELATIONAL PROPERTIES
    public int CountryId {get; set;}
    public Country Country {get; set;} = null!;
    public ICollection<AppUser> People {get; set;} = new List<AppUser>(0);
    #endregion
}
