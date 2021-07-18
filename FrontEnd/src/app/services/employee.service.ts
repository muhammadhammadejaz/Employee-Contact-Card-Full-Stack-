import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AppConstants } from '../static/app_constants';
import { ApiConstants } from '../static/api_constants';
import { EmployeeRequest, EmployeeResponse } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }

  public getEmployees() : Observable<EmployeeResponse[]>
  {
    console.log(AppConstants.SERVER_URL + ApiConstants._EMPLOYEES.GET.EMPLOYEE_LIST);
    return this.http.get<EmployeeResponse[]>(AppConstants.SERVER_URL + ApiConstants._EMPLOYEES.GET.EMPLOYEE_LIST);
  }

  public getEmployeeById(id : number) : Observable<EmployeeResponse>
  {
    console.log(AppConstants.SERVER_URL + ApiConstants._EMPLOYEES.GET.GET_EMPLOYEE_BY_ID + id);
    return this.http.get<EmployeeResponse>(AppConstants.SERVER_URL + ApiConstants._EMPLOYEES.GET.GET_EMPLOYEE_BY_ID + id);
  }

  public addEmployee(employee : EmployeeRequest) : Observable<EmployeeResponse>
  {
    console.log(AppConstants.SERVER_URL + ApiConstants._EMPLOYEES.POST.ADD_EMPLOYEE);
    return this.http.post<EmployeeResponse>(AppConstants.SERVER_URL + ApiConstants._EMPLOYEES.POST.ADD_EMPLOYEE,employee);
  }

  public updateEmployee(employee : EmployeeRequest) : Observable<EmployeeResponse>
  {
    console.log(AppConstants.SERVER_URL + ApiConstants._EMPLOYEES.PUT.UPDATE_EMPLOYEE);
    return this.http.put<EmployeeResponse>(AppConstants.SERVER_URL + ApiConstants._EMPLOYEES.PUT.UPDATE_EMPLOYEE,employee);
  }

  public deleteEmployee(id : number)
  {
    console.log(AppConstants.SERVER_URL + ApiConstants._EMPLOYEES.DELETE.DELETE_EMPLOYEE_BY_ID + id);
    return this.http.delete(AppConstants.SERVER_URL + ApiConstants._EMPLOYEES.DELETE.DELETE_EMPLOYEE_BY_ID + id);
    
  }

}
