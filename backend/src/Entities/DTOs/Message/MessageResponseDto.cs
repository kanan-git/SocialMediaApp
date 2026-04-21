namespace src.Entities.DTOs.Message;

public class MessageResponseDto
{
    public string Text {get; set;} = null!;
    public bool IsRead {get; set;} = false;
    public int UserId {get; set;}
    public int ChatId {get; set;}
    public int? AttachedMediaFileId {get; set;}
    public DateTime CreatedAt {get; set;}
    public DateTime UpdatedAt {get; set;}
}
