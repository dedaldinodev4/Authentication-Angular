import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employee: any;
  constructor(
    private employeeService: EmployeeService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
   
  }

  getAllEmployees(): void {
    this.employeeService.getAllEmployee()
      .subscribe(
        {
          next: (result) => {
            this.employee = result?.data;
            console.log(result);
          },
          error: (err: any) => {
            console.log(err)
          }
        }
      )
  }

  logout(): void {
    this.authService.logout();
  }

}
