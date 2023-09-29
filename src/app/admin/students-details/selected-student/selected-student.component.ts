import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-selected-student',
  templateUrl: './selected-student.component.html',
  styleUrls: ['./selected-student.component.css']
})
export class SelectedStudentComponent {
  forStudent:boolean = true
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
}
