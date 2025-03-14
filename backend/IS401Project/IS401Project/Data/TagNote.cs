using System.ComponentModel.DataAnnotations;

namespace IS401Project.Data
{
    public class TagNote // This is a linking table between notes and tags
    {
        [Required]
        [Key]
        public int TagId { get; set; }
        public Tag Tag { get; set; }
        [Required]
        [Key]
        public int NoteId { get; set; }
        public Note Note { get; set; }
    }
}
