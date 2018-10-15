import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalAPI } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  getCursos(): Observable<any> {
    return this.http.get('http://localhost:3000/teste');
  }

  deleteCourse(id): Observable<any> {
    return this.http.delete(`${LocalAPI}/cursos/deletar/${id}`)
  }
}
