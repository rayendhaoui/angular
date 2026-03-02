import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Residence {
  id?: number;
  name: string;
  address: string;
  image: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  private baseUrl = 'http://localhost:3000/residences';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Residence[]> {
    return this.http.get<Residence[]>(this.baseUrl);
  }

  getById(id: number): Observable<Residence> {
    return this.http.get<Residence>(`${this.baseUrl}/${id}`);
  }

  create(residence: Residence): Observable<any> {
    return this.http.post(this.baseUrl, residence);
  }

  update(id: number, residence: Residence): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, residence);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
