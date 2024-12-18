using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using StudentManagementSystemAPI.Models;

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
