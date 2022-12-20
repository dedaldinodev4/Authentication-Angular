import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, map, filter } from 'rxjs';
import { environment } from 'src/environments/environment'
import { Router } from '@angular/router';
import { IUserLogin, IUser } from '../shared/dtos';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  apiUrl = environment.apiUrl;
  tokenDateExpired: string = ''

  constructor(
    private http: HttpClient, 
    private router: Router) {
  }

  

  loginRequest(userLogin: IUserLogin ): Observable<IUser> {
    return this.http.post<IUser>(`${this.apiUrl}/oauth/login`, userLogin)
  }

  getRoleFromStorage(): string {
    return localStorage.getItem('hello-role') ?? '';
  }

  
  getTokenFromStorage(): string {
    return localStorage.getItem('hello-token') ?? '';
  }

  isAuthorizationToken(): boolean {
    const token = localStorage.getItem('hello-token') 
    if (!token) {
      return false
    }
    return true
  }

  isTokenExpired(): boolean {
    return !(new Date(this.tokenDateExpired).valueOf() > new Date().valueOf())
  }

  isUserLoggedIn(): boolean {
    return this.isAuthorizationToken() && this.isTokenExpired()
  }

  setTokenFromStorage(token: string): void {
    localStorage.setItem('hello-token', token)
  }

  setDateExpired(value: string) {
    this.tokenDateExpired = value;
  }

  logout(): void {
    this.tokenDateExpired = ''
    localStorage.clear();
    this.router.navigate(['']);
  }



}
