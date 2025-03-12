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

    }
}
