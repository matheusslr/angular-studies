import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl: string = environment.apiURLBase + "/api/v1/auth";

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, user);
  }
}
