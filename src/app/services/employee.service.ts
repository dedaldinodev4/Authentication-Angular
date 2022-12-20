import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient) {
  }

  getAllEmployee(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/funcionarios`)
  }

}
