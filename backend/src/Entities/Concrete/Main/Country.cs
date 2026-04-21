using src.Entities.Common;
using src.Entities.Concrete.Auth;

namespace src.Entities.Concrete.Main;

public class Country : BaseEntity
{
    // main
    #region MAIN PROPERTIES
    public string Name {get; set;} = null!;
    #endregion

    // relational
    #region RELATIONAL PROPERTIES
    public ICollection<City> Cities {get; set;} = new List<City>(0);
    public ICollection<AppUser> People {get; set;} = new List<AppUser>(0);
    #endregion
}
