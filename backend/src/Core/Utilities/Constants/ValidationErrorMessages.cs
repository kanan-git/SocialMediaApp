namespace src.Core.Utilities.Constants;

public static class ValidationErrorMessages
{
    public static string MinSymbolMessage(int length)
    {
        return $"Minimum {length} symbol(s) required!";
    }

    public static string MaxSymbolMessage(int length)
    {
        return $"Maximum {length} symbols you can enter!";
    }

    public static string NotNullFieldMessage()
    {
        return $"Can't be empty this field!";
    }
}
