import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Sex {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css'],
})
export class TeacherDetailsComponent {
  data = [
    {
      teacher_id: 'TA_0001',
      name: 'Anand Mukherjee',
      contact_no: '+91-9889098767',
      subject_expert: 'Hindi',
      qualification: 'Graduate/DElEd',
      documents: 'Submitted',
      active: 'green'
    },
    {
      teacher_id: 'TA_0002',
      name: 'Shivam Shinha',
      contact_no: '+91-7890987656',
      subject_expert: 'English',
      qualification: 'Graduate/DElEd',
      documents: 'Not-Submitted',
      active: 'red'
    },
    {
      teacher_id: 'TA_0003',
      name: 'Rahul Tiwari',
      contact_no: '+91-9889788767',
      subject_expert: 'Math',
      qualification: 'Graduate/DElEd',
      documents: 'Not-Submitted',
      active: 'red'
    },
    {
      teacher_id: 'TA_0004',
      name: 'Aman Sinha',
      contact_no: '+91-8289090767',
      subject_expert: 'Social Science',
      qualification: 'Graduate/DElEd',
      documents: 'Submitted',
      active: 'green'
    },
    {
      teacher_id: 'TA_0005',
      name: 'Priya Manhotra',
      contact_no: '+91-8283070767',
      subject_expert: 'General Knowladge',
      qualification: 'Graduate/DElEd',
      documents: 'Not-Submitted',
      active: 'red'
    },
    // Add more data as needed
  ];
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  startDate = new Date(1990, 0, 1);

  expandedRows: { [index: number]: boolean } = {};
  isAddTeacherPopupOpen = false;

  openAddTeacherPopup() {
    console.log("Hello")
    this.isAddTeacherPopupOpen = true;
  }

  closeAddTeacherPopup() {
    this.isAddTeacherPopupOpen = false;
  }
  

  toggleRow(index: number) {
    this.expandedRows[index] = !this.expandedRows[index];
  }

  isRowExpanded(index: number): boolean {
    return this.expandedRows[index] || false;
  }

  sex: Sex[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'others', viewValue: 'Others'}
  ]

  graduationFileName: string = '';
  certificateFileName: string = '';

  onFileSelected(event: any, type: string) {
    const file = event.target.files[0];
    if (file) {
      // Store the selected file name based on the type
      if (type === 'graduation') {
        this.graduationFileName = file.name;
        // You can also handle file upload logic for this type here
      } else if (type === 'certificate') {
        this.certificateFileName = file.name;
        // You can also handle file upload logic for this type here
      }
    } else {
      // Clear the file name if no file is selected
      if (type === 'graduation') {
        this.graduationFileName = '';
      } else if (type === 'certificate') {
        this.certificateFileName = '';
      }
    }
  }
}
