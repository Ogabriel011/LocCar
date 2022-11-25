import { Injectable } from '@angular/core';
import { Locadoras } from '../models/locadora.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocadoraService {
  private listaLocadoras!: any[];
  private url = 'http://localhost:3000/locadoras';

  constructor(private httpClient: HttpClient) {
    this.listaLocadoras = [];
  }

  get locadoras() {
    return this.listaLocadoras;
  }

  lerLocadoras(): Observable<Locadoras[]> {
    return this.httpClient.get<Locadoras[]>(this.url);
  }

  salvarLocadoras(locadora: Locadoras): Observable<Locadoras> {
    return this.httpClient.post<Locadoras>(this.url, locadora);
  }

  deletarLocadoras(idLocadoras:any):Observable<any>{
    return this.httpClient.delete<any>(`${this.url}/${idLocadoras}`);
 }

 editarLocadoras(locadora: Locadoras):Observable<Locadoras>{
	return this.httpClient.put<Locadoras>(`${this.url}/${locadora.id}`, locadora)
}
}
