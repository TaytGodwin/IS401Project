using System.ComponentModel.DataAnnotations;

namespace IS401Project.Data;

public class Login
{
    [Key]
    [Required]
    public string Email { get; set; }
    [Required]
    public string Password { get; set; }
}