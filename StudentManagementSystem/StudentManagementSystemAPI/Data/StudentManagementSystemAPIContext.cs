using Microsoft.EntityFrameworkCore;

namespace StudentManagementSystemAPI.Data
{
    public class StudentManagementSystemAPIContext : DbContext
    {
        public StudentManagementSystemAPIContext (DbContextOptions<StudentManagementSystemAPIContext> options)
            : base(options)
        {
        }

        public DbSet<StudentManagementSystemAPI.Models.Student> Student { get; set; } = default!;
    }
}
