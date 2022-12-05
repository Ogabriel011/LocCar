import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private url= 'https://servidorcarros.glitch.me/usuarios'
  
  constructor(private httpClient: HttpClient) { }

  getPerfil(): Observable<any> {
    return this.httpClient.get(this.url)
  }
  postperfil(dados: any): Observable<any> {
    return this.httpClient.post(this.url, dados);
  }
  deletePerfil(identificador: number): Observable<any>{
    return this.httpClient.delete(`${this.url}/${identificador}`)
  }
  editarPerfil(dados: any): Observable<any> {
    return this.httpClient.put(`${this.url}/${dados.id}`, dados)
  }
}