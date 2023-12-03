import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../models/student.model';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { StudentAddComponent } from '../student-add/student-add.component';
@Component({
  selector: 'app-student-list',
  standalone: true,
  templateUrl: './student-list.component.html',
  imports: [CommonModule, StudentDetailsComponent, StudentAddComponent]
})
export class StudentListComponent {
  students: Student[] = [
    { id: 1, firstName: "Ruthi", lastName: "Zvebner", address: "Ramhal", phone: "0556721978", status: true, avgMark: 100 },
    { id: 2, firstName: "yael", lastName: "Noifeld", address: "Kozk", phone: "0548590669", status: true, avgMark: 100 },
    { id: 3, firstName: "Miri", lastName: "Grossman", address: "Chagai", phone: "0504144716", status: false, avgMark: 100 },
    { id: 4, firstName: "Dvorit", lastName: "Rozner", address: "Uziel", phone: "0548441968", status: false, avgMark: 100 },
    { id: 5, firstName: "Ayala", lastName: "Garbuz", address: "Ben zakai", phone: "0556737134", status: true, avgMark: 100 },
  ]
  studentToShow?: Student;
  deleteStudent(id?: number) {
    this.students.splice(this.students.findIndex(x => x.id == id), 1);
  }

  showDetails(student: Student) {
    this.studentToShow = student;
  }

  addNewStudentToList(studentToAdd: Student) {
    this.students.push(studentToAdd);
  }

}
