using System;
using System.IO;
using System.Text;
using System.Collections.Generic;

namespace src.Core.Utilities.Constants;

public static class StaticDirectories
{
    public static string MediaFilesRoot = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "");
    
    public static string ReachToDefaultFiles(string fileName)
    {
        return MediaFilesRoot + "/default/" + fileName;
    }

    public static string ReachToUserProfile(int userId, string fileName)
    {
        return MediaFilesRoot + "/users/" + userId + "profile" + fileName;
    }
    public static string ReachToUserGallery(int userId, string fileName)
    {
        return MediaFilesRoot + "/users/" + userId + "gallery" + fileName;
    }
}
