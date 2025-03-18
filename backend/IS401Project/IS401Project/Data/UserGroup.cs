using System.ComponentModel.DataAnnotations;

namespace IS401Project.Data;

public class UserGroup
{
    [Required]
    [Key]
    public int UserID { get; set; }
    public User User { get; set; }
    [Required]
    [Key]
    public int GroupID { get; set; }
    public Group Group { get; set; }
    public string Status { get; set; }
}