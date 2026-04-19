namespace src.Core.Utilities.Exceptions;

public class CustomUnnamedException : Exception
{
    public CustomUnnamedException() : base("")
    {}
    public CustomUnnamedException(string message) : base(message)
    {}
}
