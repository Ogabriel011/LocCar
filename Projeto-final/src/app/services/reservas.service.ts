import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from '../models/reservas.models';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private listaReservas:any[];
  private url = 'http://localhost:3004/reservas'

  constructor(private httpCliente: HttpClient) {
    this.listaReservas = [];
  }

  get reservas(){
    return this.listaReservas
  }

  LerReservados():Observable<Reserva[]>{
    return this.httpCliente.get<Reserva[]>(`${this.url}`)
  }

  CadastrarReserva(reserva: Reserva):Observable<Reserva>{
    return this.httpCliente.post<Reserva>(this.url, reserva)
  }

  ExcluirReserva(idReserva:any):Observable<any>{
    return this.httpCliente.delete<any>(`${this.url}/${idReserva}`)
  }
}
