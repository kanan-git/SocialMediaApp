using src.Entities.Common;
using src.Entities.Concrete.Auth;

namespace src.Entities.Concrete.Main;

public class Chat : BaseEntity
{
    // main
    #region MAIN PROPERTIES
    public string Type {get; set;} = null!;
    #endregion

    // relational
    #region RELATIONAL PROPERTIES
    public ICollection<AppUser> Participants {get; set;} = new List<AppUser>(0);
    public ICollection<Message> Messages {get; set;} = new List<Message>(0);
    public ICollection<Media> Gallery {get; set;} = new List<Media>(0);
    #endregion
}
