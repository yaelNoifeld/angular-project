import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student, years, } from '../models/student.model';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { APP_Prof, profession } from '../models/profession.model';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css'
})
export class StudentAddComponent {
  boolAddStudent: boolean = false;
  _student?: Student;
  public get student(): Student | undefined {
    return this._student;
  }
  profArr: profession[] = APP_Prof;
  yearTemp = years;
  @Output()
  studnetSaving: EventEmitter<Student> = new EventEmitter<Student>();
  studentToAdd?: Student;

  studentForm: FormGroup = new FormGroup({
    "id": new FormControl("", Validators.required),
    "firstName": new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    "lastName": new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    "address": new FormControl(""),
    "phone": new FormControl(""),
    "status": new FormControl(""),
    "avgMark": new FormControl(""),
    "year": new FormControl(""),
    "profession": new FormControl("")
  });

  ShowAddStudent() {
    this.boolAddStudent = true;
  }
  clickSaving() {
    this.studnetSaving.emit(this.studentToAdd);
    console.log("click saving");
    let dataToSave = this.studentForm.value;
  }
}
