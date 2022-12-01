import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoCarro } from '../models/reservas.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoCarroService {

  private listaTipoCarros!: TipoCarro[]
  private url = 'https://servidorcarros.glitch.me/tipoCarros'

  constructor(private HttpClient: HttpClient) { 
    this.listaTipoCarros = []
  }

  getTipoCarros(){
    return this.listaTipoCarros
  }

  LerTipoCarros():Observable<TipoCarro[]>{
    return this.HttpClient.get<TipoCarro[]>(`${this.url}`)
  }
}
