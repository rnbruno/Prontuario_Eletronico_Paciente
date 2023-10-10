import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Origin': 'http://localhost:4200', // Domínio do Angular
    'Referer': 'http://localhost:8080/api/*',
	
  })
};

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`, httpOptions);
  }
}
