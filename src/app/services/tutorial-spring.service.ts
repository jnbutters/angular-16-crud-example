import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorialspring } from '../models/tutorialspring.model';
import { environment } from 'src/environments/environment.prod';

const baseUrl = 'http://localhost:8082/api/tutorials';
//const baseUrl = environment.backendUri;

@Injectable({
  providedIn: 'root'
})
export class TutorialSpringService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tutorialspring[]> {
    return this.http.get<Tutorialspring[]>(baseUrl);
  }

  get(id: any): Observable<Tutorialspring> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Tutorialspring[]> {
    return this.http.get<Tutorialspring[]>(`${baseUrl}?title=${title}`);
  }
}
