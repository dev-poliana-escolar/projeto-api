import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPersonagens } from '../models/ipersonagens';
import { Observable

 } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PersonagensService {
    constructor(private http:HttpClient){}
    
    listarPersonagens(page :number =1, perPage=8): Observable <Array<IPersonagens>>{
      return this.http.get<Array<IPersonagens>>(`https://last-airbender-api.fly.dev/api/v1/characters?page=${page}&perPage=${perPage}`)
    }

    detalharPersonagemId(id: string):Observable<IPersonagens>{
      return this.http.get<IPersonagens>(`https://last-airbender-api.fly.dev/api/v1/characters/${id}`)
    }
}
