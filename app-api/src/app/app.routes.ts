import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./personagens/personagens').then(m => m.Personagens) },
    { path: 'personagem-detalhe/:id', loadComponent: () => import('./personagem-detalhe/personagem-detalhe').then(m => m.PersonagemDetalhe) }
];
