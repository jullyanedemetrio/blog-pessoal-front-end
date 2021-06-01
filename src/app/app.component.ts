import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //public auth pois será acessado pelo app.component.html
  //O AuthService é instanciado no app.component.ts pois permite o acessar o método logado() no app.component.html
  constructor(
    public auth: AuthService
  ){
  }
}
