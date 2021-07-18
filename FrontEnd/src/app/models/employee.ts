export interface  EmployeeRequest {
    name : string;
    email : string;
    jobTitle : string;
    phone : string;
    imageUrl : string;
}

export interface EmployeeResponse {
    id : number;
    name : string;
    email : string;
    jobTitle : string;
    phone : string;
    imageUrl : string;
    employeeCode : string;
}