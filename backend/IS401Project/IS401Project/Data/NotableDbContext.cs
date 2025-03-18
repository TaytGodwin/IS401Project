using Microsoft.EntityFrameworkCore;

namespace IS401Project.Data
{
    public class NotableDbContext : DbContext
    {
        public NotableDbContext(DbContextOptions<NotableDbContext> options) : base(options)
        {
        }

        public DbSet<Tag> Tags { get; set; }
        public DbSet<Note> Notes { get; set; }
        public DbSet<TagNote> TagNotes { get; set; } // Linking table
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Define composite key for TagNote
            modelBuilder.Entity<TagNote>()
                .HasKey(t => new { t.TagId, t.NoteId }); // Makes a composite key in the linking table

            base.OnModelCreating(modelBuilder);

            // Define composite key for UserGroup
            modelBuilder.Entity<UserGroup>()
                .HasKey(u => new { u.UserID, u.GroupID }); // Makes a composite key in the linking table

            base.OnModelCreating(modelBuilder);
        }
    }
}
