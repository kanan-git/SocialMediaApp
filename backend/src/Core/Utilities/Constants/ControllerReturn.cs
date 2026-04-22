namespace src.Core.Utilities.Constants;

public static class ControllerReturn
{
    public static dynamic Return<T>(bool success, T msg)
    {
        return new {
            Success = success,
            Message = msg
        };
    }
    public static dynamic ReturnData<T1,T2>(T1 data, bool success, T2 msg)
    {
        return new {
            Data = data,
            Success = success,
            Message = msg
        };
    }
}
