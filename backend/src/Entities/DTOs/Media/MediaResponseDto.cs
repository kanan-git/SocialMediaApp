namespace src.Entities.DTOs.Media;

public class MediaResponseDto
{
    public string FileName {get; set;}
    public string FilePath {get; set;}
    public string FileType {get; set;}
    public long FileSize {get; set;}
    public bool IsProfileImage {get; set;}
    public int UserId {get; set;}
    public int? PostId {get; set;}
    public int? ChatId {get; set;}
    public DateTime CreatedAt {get; set;}
    public DateTime UpdatedAt {get; set;}
}
