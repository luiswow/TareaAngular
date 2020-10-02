import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from '../models/clase';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinos:DestinoViaje[];
  arreglo:string[];


  constructor() { 
    this.destinos= [];
    this.arreglo=['barcelona','colombia','argentina'];
  }

  ngOnInit(): void {
  }
  guardar(nombre:string,url:string):boolean{
    this.destinos.push(new DestinoViaje(nombre,url));
    console.log(this.destinos);
    return false;

  }

}
