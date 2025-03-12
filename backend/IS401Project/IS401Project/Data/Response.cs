using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IS401Project.Data;

public class Response
{
    [Key]
    [Required]
    public int ResponseId { get; set; }
    
    public int CommentId { get; set; }
    [ForeignKey("CommentId")]
    public Comment Comment { get; set; }
    
    public int UserId { get; set; }
    [ForeignKey("UserId")]
    public User User { get; set; }
    
    [Required]
    public DateTime ResponseDate { get; set; } = DateTime.Now;
    
    [Required]
    public string ResponseContent { get; set; }

    [Required] public int ResponseLikes { get; set; } = 0;
}