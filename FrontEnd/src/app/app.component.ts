import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeRequest, EmployeeResponse } from './models/employee';
import { EmployeeService } from './services/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDialogComponent } from './employee/employee-dialog/employee-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  // public employeesResponse : EmployeeResponse[];

  constructor(private matDialog: MatDialog){}


  ngOnInit()
  {
  }

  openDialog()
  {
    this.matDialog.open(EmployeeDialogComponent);
  }
}
