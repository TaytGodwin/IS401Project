using IS401Project.Models;
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

        // This is an overriding function to make a linking table when the database is created
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TagNote>()
                .HasKey(tn => new { tn.NoteId, tn.TagId });  // Tells system that TagNote has a composite key

            // Shows relationship between TagNote and Note table (many to one)
            modelBuilder.Entity<TagNote>()
                .HasOne(tn => tn.Note)
                .WithMany(n => n.TagNotes)
                .HasForeignKey(tn => tn.NoteId);

            // Shows relationship between TagNote and Tag table (many to one)
            modelBuilder.Entity<TagNote>()
                .HasOne(tn => tn.Tag)
                .WithMany(t => t.TagNotes)
                .HasForeignKey(tn => tn.TagId);
        }
    }
}
