import {DestinoViaje} from '../models/clase';
import { Subject, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { NuevoDestinoAction, ElegidoFavoritoAction } from './destinos-viajes-state.model';
import { Injectable } from '@angular/core';
@Injectable()
export class DestinosApiClient{
    destinos: DestinoViaje[];

    current: Subject<DestinoViaje>= new BehaviorSubject<DestinoViaje>(null);
    constructor(private store: Store<AppState>){

    }
    add(d:DestinoViaje){
        this.store.dispatch(new NuevoDestinoAction(d))


    }

    elegir(d: DestinoViaje){
        this.store.dispatch(new ElegidoFavoritoAction(d))

    }



}