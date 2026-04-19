using src.Core.Utilities.Constants;

namespace src.Core.Utilities.Exceptions;

public class AlreadyExistException : Exception
{
    public AlreadyExistException() : base(ExceptionMessages.AlreadyExist)
    {}
    public AlreadyExistException(string message) : base(message)
    {}
}
