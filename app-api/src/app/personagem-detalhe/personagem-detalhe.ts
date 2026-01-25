import { Component,signal } from '@angular/core';
import { IPersonagens } from '../models/ipersonagens';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PersonagensService } from '../services/personagens-service';

@Component({
  selector: 'app-personagem-detalhe',
  imports: [RouterLink],
  templateUrl: './personagem-detalhe.html',
  styleUrl: './personagem-detalhe.css',
})
export class PersonagemDetalhe {
  personagens= signal<IPersonagens>({ _id: '',allies: [],enemies: [],photoUrl: '',name: '', affiliation: ''});

  constructor (
    private servico : PersonagensService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.route.params.subscribe((params =>{
      const id =params['id'];
      this.servico.detalharPersonagemId(id).subscribe((data)=>this.personagens.set(data));
    }))
  }

 

}
