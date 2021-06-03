import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Tema } from '../model/Tema';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }

  //Objeto para colocar o token no headers
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>(`${environment.server}/tema`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>(`${environment.server}/tema`, tema, this.token)
  }
}
