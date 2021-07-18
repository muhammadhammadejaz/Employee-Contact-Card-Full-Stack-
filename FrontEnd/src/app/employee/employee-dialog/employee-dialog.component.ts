import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeResponse } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent implements OnInit {

  name = new FormControl(null, Validators.required);
  email = new FormControl(null, Validators.required);
  jobTitle = new FormControl(null, Validators.required);
  phone = new FormControl(null, Validators.required);
  imageUrl = new FormControl(null, Validators.required);

  employeesResponse : EmployeeResponse[] = [];

  constructor(
    private employeeService : EmployeeService,
    private matDialogRef: MatDialogRef<EmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : EmployeeResponse
    ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.name.setValue(this.data.name);
    this.email.setValue(this.data.email);
    this.jobTitle.setValue(this.data.jobTitle);
    this.phone.setValue(this.data.phone);
    this.imageUrl.setValue(this.data.imageUrl);
  }

  onSubmit()
  {
    if (this.data.id !== null)
    {
      let request = {
        id : this.data.id,
        name : this.name.value,
        email : this.email.value,
        jobTitle : this.jobTitle.value,
        phone : this.phone.value,
        imageUrl : this.imageUrl.value
      }

      this.employeeService.updateEmployee(request).subscribe(
        (response) => {
          console.log("Employee Updated Successfully");
          console.log(response);
          this.getEmployees();
          this.onClose();
        },
        (error) => {
          console.log("Try Again");
          console.log(error);
        }
      )
    }
    else
    {
      let request = {
        name : this.name.value,
        email : this.email.value,
        jobTitle : this.jobTitle.value,
        phone : this.phone.value,
        imageUrl : this.imageUrl.value
      }
      this.employeeService.addEmployee(request).subscribe(
        (response) => {
          console.log("Employee Added Successfully");
          console.log(response);
          this.getEmployees();
          this.onClose();
        },
        (error) => {
          console.log("Try Again");
          console.log(error);
        }
      )
    }
    
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

  onClose(): void {
    this.matDialogRef.close();
  }

}
