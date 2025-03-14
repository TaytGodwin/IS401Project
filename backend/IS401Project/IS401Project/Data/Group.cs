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

    public int UserId { get; set; }
    [ForeignKey("UserId")]
    public User GroupCreator { get; set; }
    
    [Required]
    public DateTime CreationDate { get; set; } = DateTime.Now;
    
    public List<UserGroup>? UserGroups { get; set; } = new List<UserGroup>();
}