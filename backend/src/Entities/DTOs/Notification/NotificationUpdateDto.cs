namespace src.Entities.DTOs.Notification;

public class NotificationUpdateDto
{
    public string Type {get; set;} = null!;
    public string? Description {get; set;}
    public bool IsRead {get; set;} = false;
    public int ReceiverUserId {get; set;}
    public DateTime UpdatedAt {get; set;} = DateTime.UtcNow;
}
