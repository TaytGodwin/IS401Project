using IS401Project.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IS401Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NoteController : ControllerBase
    {
        // Create instance of file
        private NotableDbContext _context;
        public NoteController(NotableDbContext context) => _context = context;

        // This will return all notes with each notes tags attached
        [HttpGet("AllNotes/{UserId}")]
        public IEnumerable<object> GetNotes(int UserId) // Recieve UserID as a parameter
        {
            var NotesWithTags = _context.Notes
                                .Include(n => n.TagNotes)
                                .ThenInclude(tn => tn.Tag)
                                .Where(n => n.UserId == UserId) // Go onto next table through the TagNotes table
                                .Select(n => new
                                {
                                    n.NoteId,
                                    n.NoteDate,
                                    n.NoteContent,
                                    Tags = n.TagNotes.Select(tn => tn.Tag.TagName).ToList()
                                })
                                .ToList();
            return NotesWithTags;
        }
    }
}
