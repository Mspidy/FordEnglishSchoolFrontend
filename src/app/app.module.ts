import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './admin/body/body.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HeaderComponent } from './admin/header/header.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { StudentRegisterationComponent } from './admin/student-registeration/student-registeration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular-material/material.module';
import { TeacherDetailsComponent } from './admin/teacher-details/teacher-details.component';
import { MainComponent } from './admin/main/main.component';
import { SigninComponent } from './auth/signin/signin.component';
import { StudentsDetailsComponent } from './admin/students-details/students-details.component';
import { SelectedStudentComponent } from './admin/students-details/selected-student/selected-student.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    StudentRegisterationComponent,
    TeacherDetailsComponent,
    MainComponent,
    SigninComponent,
    StudentsDetailsComponent,
    SelectedStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
