import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {EmployeeComponent} from './Employee/Employee.component';
import {StudentComponent} from './Student/Student.Component';

@NgModule({
  declarations: [
    AppComponent,EmployeeComponent,StudentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  
  bootstrap: [AppComponent,EmployeeComponent,StudentComponent]
})
export class AppModule {
  
 }
