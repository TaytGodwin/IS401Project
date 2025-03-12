namespace IS401Project.Models
{
    public class TagNote // This is a linking table between notes and tags
    {
        public int TagId { get; set; }
        public Tag Tag { get; set; }
        public int NoteId { get; set; }
        public Note Note { get; set; }
    }
}
