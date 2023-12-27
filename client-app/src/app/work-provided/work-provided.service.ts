import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { WorkProvided } from './work-provided';
import { WorkProvidedResponse } from './work-provided-list/work-provided-response';

@Injectable({
  providedIn: 'root'
})
export class WorkProvidedService {

  baseURL: string = environment.apiURLBase + "/api/v1/works";

  constructor(private http: HttpClient) { }

  save(workProvided: WorkProvided): Observable<WorkProvided> {
    return this.http.post<WorkProvided>(this.baseURL, workProvided);
  }

  findByClientNameAndMonth(name: string, month: number): Observable<WorkProvidedResponse[]> {
    const params = new HttpParams()
    .append("name", name)
    .append("month", month ? month.toString() : '');

    return this.http.get<WorkProvidedResponse[]>(this.baseURL, { params });
  }
}
