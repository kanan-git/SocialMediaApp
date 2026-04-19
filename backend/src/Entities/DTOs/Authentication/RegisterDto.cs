using src.Core.Utilities.Enums;

namespace src.Entities.DTOs.Authentication;

public class RegisterDto
{
    public string Firstname {get; set;} = null!;
    public string Lastname {get; set;} = null!;
    public string Email {get; set;} = null!;
    public string PhoneNumber {get; set;} = null!;
    public DateTime DateOfBirth {get; set;}
    public string IpVersion {get; set;} = IpAddressVersion.IPv4.ToString();
    public string? IpAddress {get; set;} = string.Empty;
    public string UserName {get; set;} = null!;
    public string Password {get; set;} = null!;
}
