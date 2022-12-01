import { Injectable } from '@angular/core';
import { Locadoras } from '../models/reservas.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocadoraService {

  private listaLocadoras!: Locadoras[];
  private url = 'https://servidorcarros.glitch.me/locadoras';

  constructor(private httpClient: HttpClient) {
    this.listaLocadoras = [];
  }

  get locadoras() {
    return this.listaLocadoras;
  }

  lerLocadoras(): Observable<Locadoras[]> {
    return this.httpClient.get<Locadoras[]>(this.url);
  }
}