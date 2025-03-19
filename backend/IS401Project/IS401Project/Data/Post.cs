using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IS401Project.Data;

public class Post
{
    [Key]
    [Required]
    public int PostId { get; set; }
    
    public int GroupId { get; set; }
    [ForeignKey("GroupId")]
    public Group Group { get; set; }
    
    public int UserId { get; set; }
    [ForeignKey("UserId")]
    public User User { get; set; }
    
    [Required]
    public string PostTitle { get; set; }
    [Required]
    public DateTime PostDate { get; set; } = DateTime.Now;
    [Required]
    public string PostContent { get; set; }

    [Required] public int PostComments { get; set; } = 0;

    [Required] public int NumberOfLikes { get; set; } = 0;
    public List<Comment>? Comments { get; set; } // List of comments for this post

}