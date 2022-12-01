import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class usuarioService {
  // URL
  private url = 'https://servidorcarros.glitch.me/usuarios?_expand=tipo'

  // O Que o Componente precisa 
  constructor(private http: HttpClient) { }

  // Pegar Usuários
  getUsuarios(): Observable<any>{
    return this.http.get(`${this.url}`)
  }

}
