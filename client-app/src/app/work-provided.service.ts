import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { WorkProvided } from './work-provided/work-provided';

@Injectable({
  providedIn: 'root'
})
export class WorkProvidedService {

  baseURL: string = environment.apiURLBase + "/api/v1/works"

  constructor(private http: HttpClient) { }

  save(workProvided: WorkProvided): Observable<WorkProvided> {
    return this.http.post<WorkProvided>(this.baseURL, workProvided);
  }

  findByClientNameAndMonth(name: string, month: number): Observable<WorkProvided[]> {
    const queryParams = new HttpParams();
    queryParams.append("name", name);
    queryParams.append("month", month);

    return this.http.get<WorkProvided[]>(this.baseURL, { params: queryParams })
  }
}
