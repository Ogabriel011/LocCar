import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url= "https://servidorcarros.glitch.me/usuarios"

  constructor(private httpClient: HttpClient) {}

  getUsuarios(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  postUsuarios(dados: any): Observable<any> {
    return this.httpClient.post(this.url, dados);
  }
}
