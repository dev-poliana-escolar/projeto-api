import { Component,signal } from '@angular/core';
import { PersonagensService } from '../services/personagens-service';
import { IPersonagens } from '../models/ipersonagens';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-personagens',
  imports: [RouterLink],
  templateUrl: './personagens.html',
  styleUrl: './personagens.css',
})
export class Personagens {
  personagens = signal<Array<IPersonagens>>([]);

  constructor(
    private servico: PersonagensService,
  ){}

  ngOnInit(){
    this.listarPersonagens();
  }

  listarPersonagens(){
    this.servico.listarPersonagens().subscribe((data)=> {
      this.personagens.set(data)
    })
  }

 
}
