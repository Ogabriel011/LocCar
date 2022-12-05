import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selecionado: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.router.url === '/carros') {
      this.selecionado = 'carros';
    }

    else if (this.router.url === '/reservas') {
      this.selecionado =  'reservas';
    }

    else if (this.router.url === '/locadoras') {
      this.selecionado = 'locadoras';
    }

    else if (this.router.url === '/perfil') {
      this.selecionado = 'perfil';
    }


  }

}
