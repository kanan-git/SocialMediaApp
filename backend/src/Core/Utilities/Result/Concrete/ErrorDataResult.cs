using src.Core.Utilities.Result.Abstract;

namespace src.Core.Utilities.Result.Concrete;

public class ErrorDataResult<T> : DataResult<T>
{
    public ErrorDataResult() : base(default, false)
    {
    }
    public ErrorDataResult(T data) : base(data, false)
    {
    }
    public ErrorDataResult(string message) : base(default, false, message)
    {
    }
    public ErrorDataResult(T data, string message) : base(data, false, message)
    {
    }
}
