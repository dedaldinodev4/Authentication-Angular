import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = this.fb.group({
    user: ['', [Validators.required ]],
    palavraPasse: ['', [Validators.required]]
  });


  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ){}

  onSubmit(): void {
    this.authService.loginRequest(this.form?.value)
    .subscribe(
      {
        next: (result) => {
          console.log(result);
          const { dataExpiracao, token_acesso } = result.data
          this.authService.setDateExpired(dataExpiracao)
          this.authService.setTokenFromStorage(token_acesso)
          this.router.navigate(['']);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error?.message);
          
        }

      }
    )
  }

  ngOnInit(): void {
   
    
  }

}
