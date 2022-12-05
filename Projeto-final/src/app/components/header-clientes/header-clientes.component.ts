import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header-clientes',
  templateUrl: './header-clientes.component.html',
  styleUrls: ['./header-clientes.component.scss']
})
export class HeaderClientesComponent implements OnInit {

  selecionado: string = '';

  constructor(private router: Router) { }

 ngOnInit(): void {
    if (this.router.url === '/carros-cliente') {
      this.selecionado = 'carros-cliente';
    }

    else if (this.router.url === '/reservas-cliente') {
      this.selecionado =  'reservas-cliente';
    }

    else if (this.router.url === '/locadoras') {
      this.selecionado = 'locadoras';
    }

    else if (this.router.url === '/perfil-usuario') {
      this.selecionado = 'perfil-cliente';
    }


  }

  sair(): void{}
}
