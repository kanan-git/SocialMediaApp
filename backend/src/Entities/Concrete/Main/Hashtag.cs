using src.Entities.Common;

namespace src.Entities.Concrete.Main;

public class Hashtag : BaseEntity
{
    // main
    #region MAIN PROPERTIES
    public string Category {get; set;} = null!;
    #endregion

    // relational
    #region RELATIONAL PROPERTIES
    public ICollection<Post> Posts {get; set;} = new List<Post>(0);
    #endregion
}
