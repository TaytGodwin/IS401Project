using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IS401Project.Data;

public class Group
{

    [Key]
    [Required]
    public int GroupId { get; set; }
    [Required]
    public string GroupName { get; set; }

    [ForeignKey("UserId")]
    public User GroupCreator { get; set; }
    
    [Required]
    public DateTime CreationDate { get; set; } = DateTime.Now;
    [Required]
    public string PrivacyStatus { get; set; } = "Private";
    public string GroupProfilePicUrl { get; set; }
    
    public List<UserGroup>? UserGroups { get; set; } = new List<UserGroup>(); // List of users through usergroups linking table
    public List<Post>? Posts { get; set; } // List of posts for this group
}