using System;
using System.Text;
using System.Collections.Generic;

using src.Core.Entities.Abstract;

namespace src.Entities.Common;

public class BaseEntity : IEntity
{
    public int Id {get; set;}
    public DateTime CreatedAt {get; set;}
    public DateTime UpdatedAt {get; set;}
}
