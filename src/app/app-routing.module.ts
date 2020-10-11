import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';
import { reducerDestinosViajes, DestinosViajesState, intializeDestinosViajesState } from './models/destinos-viajes-state.model';
import { ActionReducerMap } from '@ngrx/store';

import {  DestinosViajesEffects} from './models/destinos-viajes-state.model';
import {StoreModule as NgRxStoreModule} from '@ngrx/store'
import {EffectsModule  } from '@ngrx/effects'

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: ListaDestinosComponent},
  {path: 'destino/:id', component: DestinoDetalleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],


  exports: [RouterModule]
})
export class AppRoutingModule { }
