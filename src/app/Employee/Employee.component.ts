import {Component} from '@angular/core';

@Component({
    selector: 'Employee',
    templateUrl: 'Employee.Component.html',

})
export class EmployeeComponent{ 
    firstName:string='hari';
    salary:string='67876';
   
 dept:string='software';
   clr:string= "blue";
 bgcolor:string="yellow";
 showDetails: boolean = false;
   empName():string{
        return this.firstName+' '+this.salary;
    }
    displayDetails(): void {
        this.showDetails =!this.showDetails;
    }
    }
 