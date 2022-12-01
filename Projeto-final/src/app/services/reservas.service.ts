import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from '../models/reservas.models';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private listaReservas:any[];
  private url = 'https://servidorcarros.glitch.me/reservas'

  constructor(private httpCliente: HttpClient) {
    this.listaReservas = [];
  }

  get reservas(){
    return this.listaReservas
  }

  LerReservados():Observable<Reserva[]>{
    return this.httpCliente.get<Reserva[]>(`${this.url}?_expand=carro`)
  }

  CadastrarReserva(reserva: Reserva):Observable<Reserva>{
    return this.httpCliente.post<Reserva>(`${this.url}`, reserva)
  }

  ExcluirReserva(idReserva:any):Observable<any>{
    return this.httpCliente.delete<any>(`${this.url}/${idReserva}`)
  }

  EditarReserva(reserva: Reserva): Observable<Reserva>{
    return this.httpCliente.put<Reserva>(`${this.url}/${reserva.id}`, reserva)
  }
}
