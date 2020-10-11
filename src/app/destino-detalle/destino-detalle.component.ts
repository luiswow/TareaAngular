import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from '../models/clase';
import { ActivatedRoute } from '@angular/router';
import { DestinosApiClient } from '../models/destinosApiClient';

@Component({
  selector: 'app-destino-detalle',
  templateUrl: './destino-detalle.component.html',
  styleUrls: ['./destino-detalle.component.css']
})
export class DestinoDetalleComponent implements OnInit {
destino:DestinoViaje;
  constructor(private route: ActivatedRoute, private destinosApiClient:DestinosApiClient) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.destino = null;
  }

}
