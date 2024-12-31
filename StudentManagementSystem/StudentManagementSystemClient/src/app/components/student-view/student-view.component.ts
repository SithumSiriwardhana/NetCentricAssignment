import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../service/student.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
})
export class StudentViewComponent implements OnInit {
  student: Student | null = null;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.studentService.getStudentById(id).subscribe((data) => {
      this.student = data;
    });
  }
}
