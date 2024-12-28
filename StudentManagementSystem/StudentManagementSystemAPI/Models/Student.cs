using System.ComponentModel.DataAnnotations;

namespace StudentManagementSystemAPI.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string? Addresss { get; set; }

    }
}
