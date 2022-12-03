import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Carros } from '../models/reservas.models';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {
  private url = 'https://servidorcarros.glitch.me'

  constructor(private httpClient: HttpClient) { 

  }

  LerCarros():Observable<Carros[]>{
    return this.httpClient.get<Carros[]>(`${this.url}?_expand=tipoCarro`)
  }

  CadastrarCarros(carro: Carros):Observable<Carros>{
    return this.httpClient.post<Carros>(`${this.url}`, carro)
  }

  ExcluirCarros(idCarro:any): Observable<Carros>{
    return this.httpClient.delete<Carros>(`${this.url}/${idCarro}`)
  }

  EditarCarros(carro:Carros):Observable<Carros>{
    return this.httpClient.put<Carros>(`${this.url}/${carro.id}`, carro)
  }

  Getcarros(): Observable<any>{
    return this.httpClient.get(`${this.url}/Carros`)
  }

  GetTipocarros(): Observable<any>{
    return  this.httpClient.get(`${this.url}/tipoCarros`)
}

}