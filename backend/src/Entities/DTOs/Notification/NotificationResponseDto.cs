namespace src.Entities.DTOs.Notification;

public class NotificationResponseDto
{
    public string Type {get; set;} = null!;
    public string? Description {get; set;}
    public bool IsRead {get; set;} = false;
    public int ReceiverUserId {get; set;}
    public DateTime CreatedAt {get; set;}
    public DateTime UpdatedAt {get; set;}
}
