import { Injectable, reflectComponentType } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carros, Reserva } from '../models/reservas.models';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  private listaCarros:any[];
  private url = 'https://servidorcarros.glitch.me/carros'

  constructor(private httpClient: HttpClient) { 
    this.listaCarros = []
  }

  get carros(){
    return this.listaCarros
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
}
