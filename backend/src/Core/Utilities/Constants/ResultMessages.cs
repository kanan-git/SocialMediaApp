namespace src.Core.Utilities.Constants;

public static class ResultMessages
{
    #region Success_Messages
    // crud
    public static string Created = "Created successfully.";
    public static string Updated = "Updated successfully.";
    public static string Removed = "Removed successfully.";

    // other
    public static string Saved = "Changes Successfully saved.";

    // authorization
    public static string Logged = "Successfully logged in.";
    public static string Registered = "Successfully registered.";
    #endregion

    #region Error_Messages
    // contents
    public static string AlreadyExist = "Already exist!";
    public static string NoMatchFound = "No match found!";

    // authorization
    public static string Unauthorized = "Unauthorization! You have no permission.";
    #endregion
}
