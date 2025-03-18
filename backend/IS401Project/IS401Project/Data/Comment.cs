using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IS401Project.Data;

public class Comment
{
    [Key]
    [Required]
    public int CommentId { get; set; }
    
    public int PostId { get; set; }
    [ForeignKey("PostId")]
    public Post Post { get; set; }
    
    public int UserId { get; set; }
    [ForeignKey("UserId")]
    public User User { get; set; }
    
    [Required]
    public DateTime CommentDate { get; set; } = DateTime.Now;
    
    [Required]
    public string CommentContent { get; set; }

    [Required] public int CommentLikes { get; set; } = 0;
    public List<Response>? Response { get; set; } // List of responses for this comment
}