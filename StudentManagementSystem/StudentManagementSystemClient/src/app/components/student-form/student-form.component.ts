import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../service/student.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
})
export class StudentFormComponent implements OnInit {
  student: Student = { id: 0, name: '', age: 0, address: '' };
  isEdit: boolean = false;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.isEdit = true;
      this.studentService.getStudentById(id).subscribe((data) => {
        this.student = data;
      });
    }
  }

  saveStudent(): void {
    if (this.isEdit) {
      this.studentService
        .updateStudent(this.student.id, this.student)
        .subscribe(() => this.router.navigate(['/']));
    } else {
      this.studentService.addStudent(this.student).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
