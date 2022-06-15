import { AfterViewInit, Component, OnInit } from '@angular/core';
import  * as L from 'leaflet';
import 'mapbox-gl-leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit, AfterViewInit {

  private map: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initMapa();
  }

  initMapa() {
    this.map = L.map('map').setView([32.339444, -6.360833], 15);

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 15,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    ).addTo(this.map);
  }
}
