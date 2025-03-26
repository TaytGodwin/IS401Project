using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IS401Project.Data;

public class User
{
    [Required]
    [Key]
    public int UserId { get; set; }
    [Required]
    [ForeignKey("Email")]
    public Login Login { get; set; }
    [Required]
    public string FirstName { get; set; }
    [Required]
    public string LastName { get; set; }
    public string ProfilePicture { get; set; }
    public string Phone { get; set; }
    public DateTime LastLogin { get; set; } = DateTime.Now;
    public int DaysRead { get; set; } = 0;
    public int LongestStreak { get; set; } = 0;
    
    public List<UserGroup>? UserGroups { get; set; } = new List<UserGroup>(); // List of groups their in through the linking table
    public List<Note>? Notes { get; set; } // All of their notes

}