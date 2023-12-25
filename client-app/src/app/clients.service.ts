import { Injectable } from '@angular/core';
import { Client } from './clients/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  save(client: Client): Observable<Client> {
    return this.http.post<Client>('http://localhost:8080/api/v1/clients', client)
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:8080/api/v1/clients');
  }

  getClientById(id: number): Observable<any> {
    return this.http.get<Client>(`http://localhost:8080/api/v1/clients/${id}`);
  }

  update(client: Client): Observable<Client> {
    return this.http.put<Client>('http://localhost:8080/api/v1/clients', client);
  }

  delete(id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/v1/clients/${id}`);
  }
}
