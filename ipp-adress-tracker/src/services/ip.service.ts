import { Constantes } from './../shared/Constantes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ip } from 'src/shared/models/Ip';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private http: HttpClient) { }

  get(ipAdress: string): Observable<Ip>{
    return this.http.get<Ip>(Constantes.URL_BASE_IP + `apiKey=chave_da_api&ipAddress=0.0.0.0`);
  }
}
