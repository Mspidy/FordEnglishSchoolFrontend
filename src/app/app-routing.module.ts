import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { StudentRegisterationComponent } from './admin/student-registeration/student-registeration.component';
import { TeacherDetailsComponent } from './admin/teacher-details/teacher-details.component';
import { SigninComponent } from './auth/signin/signin.component';
import { StudentsDetailsComponent } from './admin/students-details/students-details.component';

const routes: Routes = [
  {path:'', redirectTo: 'signin', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'student-registeration', component:StudentRegisterationComponent},
  {path:'teacher-details', component: TeacherDetailsComponent},
  {path:'signin', component:SigninComponent},
  {path:'students-details', component: StudentsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
