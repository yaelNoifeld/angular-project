import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../models/student.model';
import { StudentListComponent } from '../student-list/student-list.component';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [CommonModule, StudentListComponent],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {

  @Input()
  student?: Student;
  
  // boolAddStudent:boolean=false;
  // ShowAddStudent(){
  //   this.boolAddStudent=true;
  // }
  // clickSaving(){
  //   //@Output

  // }
}
