import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {
  private url = 'https://servidorcarros.glitch.me/carros'

  constructor(private http: HttpClient) { 

  }

  GetCarros(): Observable<any>{
    return this.http.get(`${this.url}`)
  }
}
