import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {
  private url = 'https://servidorcarros.glitch.me'

  constructor(private http: HttpClient) { 

  }

  Getcarros(): Observable<any>{
    return this.http.get(`${this.url}/Carros`)
  }

  GetTipocarros(): Observable<any>{
    return  this.http.get(`${this.url}/tipoCarros`)
  }
}
