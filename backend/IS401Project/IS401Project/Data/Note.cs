namespace IS401Project.Data
{
    public class Note
    {
        public int NoteId { get; set; }
        public DateTime NoteDate { get; set; } = DateTime.Now;
        public string? NoteContent { get; set; }
        public int UserId { get; set; }

        // This is a list of multiple TagNote items attached to this note
        public List<TagNote> TagNotes { get; set; } = new List<TagNote>();
    }
}
