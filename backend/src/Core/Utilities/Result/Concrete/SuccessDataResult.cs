using src.Core.Utilities.Result.Abstract;

namespace src.Core.Utilities.Result.Concrete;

public class SuccessDataResult<T> : DataResult<T>
{
    public SuccessDataResult() : base(default, true)
    {
    }
    public SuccessDataResult(T data) : base(data, true)
    {
    }
    public SuccessDataResult(string message) : base(default, true, message)
    {
    }
    public SuccessDataResult(T data, string message) : base(data, true, message)
    {
    }
}
