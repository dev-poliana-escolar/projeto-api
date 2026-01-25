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
  pageAtual = signal(1);

  constructor(
    private servico: PersonagensService,
  ){}

  ngOnInit(){
    this.listarPersonagens();
  }

  listarPersonagens(){
    this.servico.listarPersonagens(this.pageAtual()).subscribe((data)=> {
      this.personagens.set(data)
    })
  }

  nextPage(){
    this.pageAtual.update(p=>p+1);
    this.listarPersonagens();
  }

  previousPage(){
    if(this.pageAtual()>1){
      this.pageAtual.update(p => p - 1);
      this.listarPersonagens();
    }
  }

 
}
