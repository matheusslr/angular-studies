import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from './login/user';
import { Register } from './register/register';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = environment.apiURLBase + "/api/v1/auth";

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtHelperService: JwtHelperService
  ) { }

  login(user: User): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, user);
  }

  register(register: Register): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, register);
  }

  getToken(): string | null {
    const tokenString = localStorage.getItem("access_token");
    if (tokenString) {
      const token = JSON.parse(tokenString).accessToken
      return token;
    }
    return null;
  }

  logout(): void {
    localStorage.removeItem("access_token");
    this.router.navigate(['/login']);
  }

  getUsername(): string {
    const token = localStorage.getItem("access_token");
    if (token) {
      const username = JSON.parse(token).username;
      return username;
    }
    return "User not logged";
  }

  isAutheticated(): boolean {
    const token = this.getToken();

    if (token) {
      const expired = this.jwtHelperService.isTokenExpired(token);
      return !expired;
    }
    return false;
  }
}
