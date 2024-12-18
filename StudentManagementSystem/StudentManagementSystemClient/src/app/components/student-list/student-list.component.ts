import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {

  public students: Student[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.http.get<Student[]>('https://localhost:7220/api/students').subscribe(
      (result) => {
        this.students = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  viewStudent(id:number) {

  }

  editStudent(id: number) {

  }

  deleteStudent(id: number) {

  }
}
