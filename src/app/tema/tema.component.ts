import { TemaService } from './../service/tema.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTema: Tema[] //Array de objetos Tema

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      alert('Sua seção expirou. Logue novamente')
      this.router.navigate(['/entrar'])
    }

    this.findAllTemas()
  }

  findAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTema = resp
    })
  }

  cadastrarTema() {
    this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      alert('Tema cadastrado com sucesso')
      this.findAllTemas()
      this.tema = new Tema() //Limpar o input descricao
    })
  }


}
