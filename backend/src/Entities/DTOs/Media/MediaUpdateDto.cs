using src.Core.Utilities.Enums;

namespace src.Entities.DTOs.Media;

public class MediaUpdateDto
{
    public string FileName {get; set;} = null!;
    public string FilePath {get; set;} = null!;
    public string FileType {get; set;} = MediaFileType.image.ToString();
    public long FileSize {get; set;}
    public bool IsProfileImage {get; set;}
    public int UserId {get; set;}
    public int? PostId {get; set;}
    public int? ChatId {get; set;}
    public DateTime UpdatedAt {get; set;} = DateTime.UtcNow;
}
