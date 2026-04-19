namespace src.Core.Utilities.Result.Concrete;

public class Result : Abstract.IResult
{
    public bool Success { get; }
    public string Message { get; }

    public Result(bool success)
    {
        Success = success;
    }
    public Result(bool success, string message) : this(success)
    {
        Message = message;
    }
}
