import { Injectable } from '@angular/core';
import { Client } from './client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl: string = environment.apiURLBase + "/api/v1/clients";

  constructor(private http: HttpClient) { }

  save(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, client)
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl);
  }

  getClientById(id: number): Observable<any> {
    return this.http.get<Client>(`${this.baseUrl}/${id}`);
  }

  update(client: Client): Observable<Client> {
    return this.http.put<Client>(this.baseUrl, client);
  }

  delete(id: number): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
