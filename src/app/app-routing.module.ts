import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import { StudentsDataComponent } from './students-data/students-data.component';
import { FormsModule } from '@angular/forms';



const routes: Routes = [{
  path: 'students',
  component:StudentsComponent
},

{
  path: 'details',
  component:StudentsDataComponent
}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
