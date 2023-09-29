import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Class {
  value: string;
  viewValue: string;
}

export interface Section {
  value: string;
  viewValue: string;
}

export interface Sex {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-student-registeration',
  templateUrl: './student-registeration.component.html',
  styleUrls: ['./student-registeration.component.css']
})
export class StudentRegisterationComponent {

  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  startDate = new Date(1990, 0, 1);

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  foods: Class[] = [
    {value: 'nursury', viewValue: 'Nursury'},
    {value: 'lkg', viewValue: 'LKG'},
    {value: 'ukg', viewValue: 'UKG'}
  ];

  sections: Section[] = [
    {value: 'A', viewValue: 'A'},
    {value: 'B', viewValue: 'B'},
    {value: 'C', viewValue: 'C'}
  ];

  sex: Sex[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'others', viewValue: 'Others'}
  ]

}
