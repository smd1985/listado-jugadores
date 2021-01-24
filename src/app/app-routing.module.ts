import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JugadoresListComponent } from './components/jugadores-list/jugadores-list.component';
import { JugadorFormComponent } from './components/jugador-form/jugador-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/jugadores',
    pathMatch: 'full'
  },
  {
    path: 'jugadores',
    component: JugadoresListComponent
  },
  {
    path: 'jugadores/insertar',
    component: JugadorFormComponent
  },
  {
    path: 'jugador/edit/:id',
    component: JugadorFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
