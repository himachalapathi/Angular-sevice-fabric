import {Component} from '@angular/core';

@Component({
    selector: 'Student',
    templateUrl: 'Student.Component.html'
    
})
export class StudentComponent{ 
    firstName:string='hari';
    id:string='67876';
    address:string='ctr';
    stuName():string{
        return this.firstName+' '+this.id+' '+this.address;
    }
    }
 