import { Injectable } from '@angular/core';
import { Client } from './clients/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

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

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>('http://localhost:8080/api/v1/clients', client);
  }
}
