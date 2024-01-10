import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from './login/user';
import { Register } from './register/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = environment.apiURLBase + "/api/v1/auth";

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, user);
  }

  register(register: Register): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, register);
  }

  getToken() : string | null {
    const tokenString = localStorage.getItem("access_token");
    if (tokenString) {
      const token = JSON.parse(tokenString).accessToken
      return token;
    }
    return null;
  }
}
