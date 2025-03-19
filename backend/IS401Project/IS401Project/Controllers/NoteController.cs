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

        // This will return all notes for a specific tag
        [HttpGet("AllNotesForTag/{UserId}&{TagId}")]
        public IEnumerable<object> GetNotesForTag(int UserId, int TagId) // Recieve UserID & TagID as a parameter
        {
            var NotesForOneTag = _context.Notes
                                .Include(n => n.TagNotes)
                                .Include(n => n.TagNotes) // Include the related TagNotes table
                                .Where(n => n.UserId == UserId && n.TagNotes.Any(tn => tn.TagId == TagId)) // Check if the TagNotes contain the specified Tag
                                .Select(n => new
                                {
                                    n.NoteId,
                                    n.NoteDate,
                                    n.NoteContent
                                })
                                .ToList();
            return NotesForOneTag;
        }

        // This will return all tag names
        [HttpGet("AllTags/{UserId}")]
        public IEnumerable<object> GetNotesForTag(int UserId) // Recieve UserID as a parameter
        {
            var tagNames = _context.Notes
                            .Where(n => n.UserId == UserId) // Filter by UserId
                            .SelectMany(n => n.TagNotes) // go through the TagNotes table
                            .Select(tn => tn.Tag.TagName) // Select the tag names
                            .ToList();

            return tagNames;
        }
    }
}
