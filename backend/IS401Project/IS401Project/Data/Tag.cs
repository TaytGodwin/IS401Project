using System.ComponentModel.DataAnnotations;

namespace IS401Project.Data
{
    public class Tag
    {
        [Key]
        public int TagId { get; set; }
        public string TagName { get; set; }


        // This is a list of multiple TagNote items attached to this tag
        public List<TagNote> TagNotes { get; set; } = new List<TagNote>();
    }
}
