import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

    //Observable mapeia a entrada do método, o <UserLogin> mapeia o retorno do método. É obrigatório!
    //A palavra reservada this indica que a variável está no escopo global

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>(`${environment.server}/usuarios/logar`, userLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>(`${environment.server}/usuarios/cadastrar`, user)
  }

  logado() {
    let ok: boolean = false

    if (environment.token != ''){
      ok = true
    }

    return ok
  }
}
