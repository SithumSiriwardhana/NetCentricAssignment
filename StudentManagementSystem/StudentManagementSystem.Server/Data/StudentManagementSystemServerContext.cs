using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using StudentManagementSystem.Server.Models;

namespace StudentManagementSystem.Server.Data
{
    public class StudentManagementSystemServerContext : DbContext
    {
        public StudentManagementSystemServerContext (DbContextOptions<StudentManagementSystemServerContext> options)
            : base(options)
        {
        }

        public DbSet<StudentManagementSystem.Server.Models.Student> Student { get; set; } = default!;
    }
}
