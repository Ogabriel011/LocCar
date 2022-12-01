import { identifierName } from '@angular/compiler';
import { Component, isDevMode, OnInit } from '@angular/core';
import { CarrosService } from '../Services/carros.service';
import { LocalStorageService } from '../Services/local-storage.service';

@Component({
  selector: 'app-carros-cliente',
  templateUrl: './carros-cliente.component.html',
  styleUrls: ['./carros-cliente.component.scss']
})
export class CarrosClienteComponent implements OnInit {

listaCarros: any;

listaTipoCarros: any;

  constructor(private listarCarros: CarrosService, private localStorage: LocalStorageService) { }

  ngOnInit(): void {
  
    this.lerCarros();
    this.lerTipoCarros();
  }

  lerCarros() {
    this.listarCarros.Getcarros().subscribe({
      next: (dados: any) => {
        this.listaCarros = dados

        console.log(this.listaCarros);
      },
      error: (erro) => {
        console.log(erro);
      }
    })
  }

  lerTipoCarros() {
    this.listarCarros.GetTipocarros().subscribe({
      next:(dados: any) => {
        this.listaTipoCarros = dados

        console.log(this.listaTipoCarros); 
      }
    })
  }

  filtrarCarros(id: number) {
    return this.listaCarros.filter((carro: any) => carro.tipoCarroId === id) 
  }
}
