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

        public DbSet<User> Users { get; set; }
        public DbSet<Login> Logins { get; set; }
        public DbSet<UserGroup> UserGroup { get; set; } // Linking table
        public DbSet<Group> Groups { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Response> Responses { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Define composite key for TagNote
            modelBuilder.Entity<TagNote>()
                .HasKey(t => new { t.TagId, t.NoteId }); // Makes a composite key in the linking table

            base.OnModelCreating(modelBuilder);

            // Define composite key for UserGroup
            modelBuilder.Entity<UserGroup>()
                .HasKey(u => new { u.UserId, u.GroupID }); // Makes a composite key in the linking table

            base.OnModelCreating(modelBuilder);
        }
    }
}
