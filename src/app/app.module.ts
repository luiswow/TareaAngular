import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DestinosApiClient} from './models/destinosApiClient';
import { AppRoutingModule } from './app-routing.module';
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

// redux init

export interface AppState {
  destinos: DestinosViajesState;
  
}
const reducers: ActionReducerMap<AppState> ={
  destinos: reducerDestinosViajes
};
let reducersInitialState = {
  destinos: intializeDestinosViajesState()
}


@NgModule({
  declarations: [
    AppComponent,
    DestinoViajeComponent,
    ListaDestinosComponent,
    DestinoDetalleComponent,
    FormDestinoViajeComponent,
    NgRxStoreModule
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgRxStoreModule.forRoot(reducers, {initialState: reducersInitialState}),
    EffectsModule.forRoot([DestinosViajesEffects])

  ],
  providers: [DestinosApiClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
