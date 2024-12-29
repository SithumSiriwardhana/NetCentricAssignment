import { Component } from '@angular/core';
import { Student } from '../../models/student';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {

  student: Student = {
    id:0,
    name: '',
    age: 0,
    address: '',
  };

  constructor(private http: HttpClient) { }

  saveStudent() {
    const apiUrl = 'https://localhost:8081/api/students'; // Replace with your API endpoint
    this.http.post(apiUrl, this.student).subscribe(
      (response) => {
        console.log('Student saved successfully:', response);
        alert('Student saved successfully!');
        this.resetForm();
      },
      (error) => {
        console.error('Error saving student:', error);
        alert('Failed to save student. Please try again.');
      }
    );
  }

  resetForm() {
    this.student = {
      id:0,
      name: '',
      age: 0,
      address: '',
    };
  }

}
