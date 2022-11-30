import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Carros, Reserva } from 'src/app/models/reservas.models';
import { CarrosService } from 'src/app/services/carros.service';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-reservas-cliente',
  templateUrl: './reservas-cliente.component.html',
  styleUrls: ['./reservas-cliente.component.scss']
})
export class ReservasClienteComponent implements OnInit {

  form!: FormGroup;
  reservas!: Reserva[];
  carros!: Carros[];
  guardarId! :number;
  verificarEditar: boolean = false;

  constructor(
    private FormBuilder: FormBuilder,
    private ReservaService: ReservasService,
    private CarrosService: CarrosService
  ) { }

  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      modelo: new FormControl('',),
      data: new FormControl('',),
      horario: new FormControl('',),
      dataentrega: new FormControl('',),
      filial: new FormControl('',),
      carroId: new FormControl('',)
    })

    this.form.controls['carroId'].setValue(0)

    this.form.valueChanges.subscribe(console.log)

    this.MostrarReservas()
    this.MostrarCarros()
  }

  MostrarReservas(){
    this.ReservaService.LerReservados().subscribe({
      next: (reservas: Reserva[]) => {
        this.reservas = reservas
        console.log(reservas)
      },
      error: () => {
        console.log('Erro')
      }
    })
  }

  MostrarCarros(){
    this.CarrosService.LerCarros().subscribe({
      next: (carros: Carros[]) => {
        this.carros = carros
        console.log(carros)
      },
      error: () => {
        console.log("erro carros")
      }
    })
  }

  FazerReserva(){
    const id = (this.reservas[(this.reservas.length) - 1].id) + 1;
    const data = this.form.controls["data"].value;
    const horario = this.form.controls["horario"].value;
    const dataentrega = this.form.controls["dataentrega"].value;
    const usuarioId = 1
    const carroId = this.form.controls["carroId"].value;

    const reserva: Reserva = {id:id, data: data, horario:horario, dataentrega:dataentrega, usuarioId:usuarioId, carroId:carroId}

    this.ReservaService.CadastrarReserva(reserva).subscribe({
      next: () => {
        console.log('Sucesso')
        this.MostrarReservas()
        this.form.reset()
      },
      error: () => {
        console.log('Erro')
      }
    })
  }

  ExcluirReserva(reservaId:number){
    this.ReservaService.ExcluirReserva(reservaId).subscribe({
      next:() => {
        console.log("Excluiu")
        this.MostrarReservas()
      },
      error:()=>{
        console.log("não excluiu")
      }
    })
  }

  InputarDadosReserva(itemReserva:Reserva){
    this.guardarId = itemReserva.id
    this.form.controls["data"].setValue(itemReserva.data)
    this.form.controls["horario"].setValue(itemReserva.horario)
    this.form.controls["dataentrega"].setValue(itemReserva.dataentrega)
    this.form.controls["carroId"].setValue(itemReserva.carroId)
    console.log(itemReserva.carroId)

    this.verificarEditar = true
  }

  EditarReserva(){
    const id = this.guardarId
    const carroId = this.form.controls['carroId'].value
    const data = this.form.controls['data'].value
    const horario = this.form.controls['horario'].value
    const dataentrega = this.form.controls['dataentrega'].value
    const usuarioId = 1

    const reserva = {id:id, carroId:carroId, data:data, horario:horario, dataentrega:dataentrega, usuarioId:usuarioId}

    this.ReservaService.EditarReserva(reserva).subscribe({
      next: () => {
        console.log('editado')
        this.MostrarReservas()
      },
      error: () => {
        console.log("erro editar")
      }

    })

    this.verificarEditar = false
    this.form.reset()
    this.form.controls['carroId'].setValue(0)

  }

}
