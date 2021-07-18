import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EmployeeResponse } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { EmployeeDialogComponent } from './employee-dialog/employee-dialog.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  name : string = '';
  email : string = '';
  jobTitle : string = '';
  phone : string = '';
  imageUrl : string = '';
  employeesResponse : EmployeeResponse[] = [];
  employee : EmployeeResponse;

  constructor(
    private employeeService : EmployeeService,
    private matDialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  onEdit(id : number) : void {
    this.employeeService.getEmployeeById(id).subscribe(
      (response) => {
        this.employee = response;
        console.log(this.employee);
        this.matDialog.open(EmployeeDialogComponent,{
          data : this.employee
        })
      },
      (error) => {
        console.log("Can't Open Dialog");
      }
    )
  }

  onDelete(id : number) : void {
    this.employeeService.deleteEmployee(id).subscribe(
      (response) => {
        console.log("Employee Id ",id, " deleted successfully");
        this.getEmployees();
      },
      (error) => {
        console.log("Employee Id ",id, " not deleted");
      }
    )
  }

  public getEmployees() : void {
    this.employeeService.getEmployees().subscribe(
      (response : EmployeeResponse[]) => {
        console.log(response)
        this.employeesResponse = response;
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
