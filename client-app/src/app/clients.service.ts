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

  getClient(): Client {
    let client = new Client();
    client.name = "Name";
    client.cpf = "00000000000"
    return client;
  }
}
