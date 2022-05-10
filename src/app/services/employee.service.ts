import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'app/models/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Employee[]>
{ 
  return this.http.get<Employee[]>("http://localhost:8081/api/utilisateur/userList");

}

 public addEmployee(employee: Employee):Observable<Employee>
 {
   return this.http.post<Employee>("http://localhost:8081/api/utilisateur/addUser", employee);
 }

 public updateEmployee(employee: Employee):Observable<Employee>
 {
   return this.http.put<Employee>("http://localhost:8081/api/utilisateur/update", employee);
 }

 public deleteEmployee(idEmployee: number):Observable<void>
 {
   return this.http.delete<void>(`http://localhost:8081/api/utilisateur/delete/${idEmployee}`);
 }
}
