import { environment } from 'apps/shift-licensing-backoffice/src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  public baseUrlAPI: string;

  constructor(private http: HttpClient) {
      this.baseUrlAPI = `${environment.baseUrlAPI}/api/patients`;
  }

  getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseUrlAPI);
  }

  get(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.baseUrlAPI}/${id}`);
  }

  create(data: Patient): Observable<any> {
    return this.http.post(this.baseUrlAPI, data);
  }

  update(id: number, data: Patient): Observable<any> {
    return this.http.put(`${this.baseUrlAPI}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrlAPI}/${id}`);
  }

}
