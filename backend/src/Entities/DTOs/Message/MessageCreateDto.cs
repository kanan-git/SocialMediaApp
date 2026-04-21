namespace src.Entities.DTOs.Message;

public class MessageCreateDto
{
    public string Text {get; set;} = null!;
    public bool IsRead {get; set;} = false;
    public int UserId {get; set;}
    public int ChatId {get; set;}
    public int? AttachedMediaFileId {get; set;}
    public DateTime CreatedAt {get; set;} = DateTime.UtcNow;
    public DateTime UpdatedAt {get; set;} = DateTime.UtcNow;
}
