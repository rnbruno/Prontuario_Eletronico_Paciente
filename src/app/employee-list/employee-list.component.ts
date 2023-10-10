import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
 
  constructor(private employeeService: EmployeeService){

  }
  ngOnInit(): void{

    this.getEmployees();
    // this.employees =[{
    //   "id":1,
    //   "firstName":"Ramesh",
    //   "lastName": "Sulian",
    //   "emailId": "ramesh@gmail.com"
    // },{
    //   "id":2,
    //   "firstName":"John",
    //   "lastName": "Fai",
    //   "emailId": "johnf@gmail.com"
    // }]
  }
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data =>{
      console.log(data);
      this.employees = data;
    });
  }

}
