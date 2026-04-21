using System;
using System.Text;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

using src.Entities.Concrete.Main;
using src.Core.Utilities.Enums;

namespace src.Entities.Concrete.Auth;

public class AppUser : IdentityUser<int>
{
    // main
    public string Firstname {get; set;} = null!;
    public string Lastname {get; set;} = null!;
    public DateTime DateOfBirth {get; set;}
    public string IpVersion {get; set;} = IpAddressVersion.IPv4.ToString();
    public string? IpAddress {get; set;} = string.Empty;
    public bool ProfileImage {get; set;} = false;

    // relational
    public int? CountryId {get; set;}
    public Country? Country {get; set;}
    public int? CityId {get; set;}
    public City? City {get; set;}
    public ICollection<Comment>? Comments {get; set;} = new List<Comment>(0);
    public ICollection<Post>? Posts {get; set;} = new List<Post>(0);
    public ICollection<Reaction>? Reactions {get; set;} = new List<Reaction>(0);
    public ICollection<Media>? MediaFiles {get; set;} = new List<Media>(0);
    public ICollection<Activity> Activities {get; set;} = new List<Activity>(0);
    public ICollection<Chat> Chats {get; set;} = new List<Chat>(0);
    public ICollection<Message> Messages {get; set;} = new List<Message>(0);
    public ICollection<Notification> Notifications {get; set;} = new List<Notification>(0);
}
