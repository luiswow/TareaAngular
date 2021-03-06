import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DestinosApiClient} from './models/destinosApiClient';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { DestinoViajeComponent } from './destino-viaje/destino-viaje.component';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormDestinoViajeComponent } from './form-destino-viaje/form-destino-viaje.component'
import { DestinosViajesState, reducerDestinosViajes, intializeDestinosViajesState, DestinosViajesEffects} from './models/destinos-viajes-state.model';
import {ActionReducerMap} from '@ngrx/store';
import {StoreModule as NgRxStoreModule} from '@ngrx/store'
import {EffectsModule  } from '@ngrx/effects'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', component: ListaDestinosComponent},
  { path: 'destino', component: DestinoDetalleComponent},
];


export interface AppState {
  destinos: DestinosViajesState;
}

const reducers: ActionReducerMap<AppState> = {
  destinos: reducerDestinosViajes
};

const reducersInitialState = {
  destinos: intializeDestinosViajesState()
};


@NgModule({
  declarations: [
    AppComponent,
    DestinoViajeComponent,
    ListaDestinosComponent,
    DestinoDetalleComponent,
    FormDestinoViajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgRxStoreModule.forRoot(reducers, { initialState: reducersInitialState,
      runtimeChecks:{

        strictStateImmutability: false,
        
        strictActionImmutability: false,
        
        } }),
    EffectsModule.forRoot([DestinosViajesEffects]),
  ], 
  providers: [
    DestinosApiClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
