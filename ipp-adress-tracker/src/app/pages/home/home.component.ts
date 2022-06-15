import { Ip } from './../../../shared/models/Ip';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IpService } from 'src/services/ip.service';
import * as L from 'leaflet';
import 'mapbox-gl-leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  ip!: Ip;
  private map: any;
  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor(private ipService: IpService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // this.initMapa();
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

  metodoInitMapa2() {
    const myAPIKey = '181810945ce84b3a8e326c8438c6f2b4';
    const mapStyle = 'https://maps.geoapify.com/v1/styles/osm-carto/style.json';

    const initialState = {
      lng: 11,
      lat: 49,
      zoom: 4,
    };

    const map = new L.Map(this.mapContainer.nativeElement).setView(
      [initialState.lat, initialState.lng],
      initialState.zoom
    );

    map.attributionControl
      .setPrefix('')
      .addAttribution(
        'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>'
      );

    L.mapboxGL({
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      accessToken: 'no-token',
    }).addTo(map);
  }

  search(event: any) {
    /* this.ipService.get(event).subscribe((ip) => {
      this.ip = ip;
    }); */
  }
}
