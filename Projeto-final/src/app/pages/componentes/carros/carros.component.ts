import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Carros, Locadoras, TipoCarro } from 'src/app/models/reservas.models';
import { CarrosService } from 'src/app/services/carros.service';
import { LocadoraService } from 'src/app/services/locadora.service';
import { TipoCarroService } from 'src/app/services/tipo-carro.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent implements OnInit {

  form!: FormGroup;
  carros!: Carros[]
  locadoras!: Locadoras[]
  tipoCarro!: TipoCarro[]
  guardarId!:number
  verificarEditar: boolean = false

  constructor(
    private FormBuilder: FormBuilder,
    private CarrosService: CarrosService,
    private LocadoraService: LocadoraService,
    private TipoCarroService:TipoCarroService
    ) { }

  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      nome: new FormControl(''), 
      portas: new FormControl(''),
      npessoas: new FormControl(''),
      locadoraId: new FormControl(''),
      tipoCarroId: new FormControl('') 
    })

    this.form.controls['tipoCarroId'].setValue(0)
    this.form.controls['locadoraId'].setValue(0)
    this.MostrarCarros()
    this.listarLocadoras()
    this.MostrarTipoCarro()
    this.form.valueChanges.subscribe(console.log);
  }

  MostrarCarros(){
    this.CarrosService.LerCarros().subscribe({
      next: (carros: Carros[]) => {
        this.carros = carros
        console.log(carros)
      },
      error: () => {
        console.log("erro")
      }
    })
  }

  listarLocadoras(): void {
    this.LocadoraService.lerLocadoras().subscribe({
      next: (locadoras: Locadoras[]) => {
        this.locadoras = locadoras
        console.log(this.locadoras);
      },
      error: () => {
        console.log("erro em ler locadoras");
      }
    })
  }

  MostrarTipoCarro(){
    this.TipoCarroService.LerTipoCarros().subscribe({
      next: (tipoCarro: TipoCarro[]) => {
        this.tipoCarro = tipoCarro
        console.log(tipoCarro)
      },
      error: () => {
        console.log("erro tipo carro")
      }
    })
  }

  FiltrarCarros(tipoCarro:number){
    return this.carros.filter(carro => carro.tipoCarroId === tipoCarro)
  }

  CadastrarCarros(){
    const id = (this.carros[(this.carros.length) - 1].id) + 1;
    const nome = this.form.controls['nome'].value;
    const portas = this.form.controls['portas'].value;
    const npessoas = this.form.controls['npessoas'].value;
    const locadoraId = this.form.controls['locadoraId'].value;
    const tipoCarroId = this.form.controls['tipoCarroId'].value;

    const carro = {
      id:id,
      nome:nome,
      portas:portas,
      npessoas:npessoas,
      locadoraId: parseInt (locadoraId),
      tipoCarroId: parseInt (tipoCarroId)
    }

    this.CarrosService.CadastrarCarros(carro).subscribe({
      next: (carro) => {
        console.log(carro)
        this.MostrarCarros()
        this.form.reset()
        this.form.controls['tipoCarroId'].setValue(0)
        this.form.controls['locadoraId'].setValue(0)
      },
      error: () => {
        console.log('Erro cadastro')
      }
    })
  }

  ExcluirCarros(idCarro:number){
    this.CarrosService.ExcluirCarros(idCarro).subscribe({
      next: () => {
        console.log('excluiu')
        this.MostrarCarros()
      },
      error: () => {
        console.log("não excluiu")
      }
    })
  }

  InputarDadosCarros(itemCarro:Carros){
    this.guardarId = itemCarro.id;
    this.form.controls['nome'].setValue(itemCarro.nome);
    this.form.controls['portas'].setValue(itemCarro.portas)
    this.form.controls['npessoas'].setValue(itemCarro.npessoas)
    this.form.controls['tipoCarroId'].setValue(itemCarro.tipoCarroId)
    this.form.controls['locadoraId'].setValue(itemCarro.locadoraId)

    this.verificarEditar = true
  }

  EditarCarros(){
    const id = this.guardarId;
    const nome = this.form.controls['nome'].value;
    const portas = this.form.controls['portas'].value;
    const npessoas = this.form.controls['npessoas'].value;
    const locadoraId = this.form.controls['locadoraId'].value;
    const tipoCarroId = this.form.controls['tipoCarroId'].value;

    console.log(tipoCarroId);
    

    const carro = {
      id:id,
      nome:nome,
      portas:portas,
      npessoas:npessoas,
      locadoraId: parseInt(locadoraId),
      tipoCarroId: parseInt(tipoCarroId)
    }

    this.CarrosService.EditarCarros(carro).subscribe({
      next: () => {
        console.log('Editou')
        this.MostrarCarros()
      },
      error: () => {
        console.log("erro editar")
      }
    })

    this.verificarEditar = false;
    this.form.reset()
    this.form.controls['tipoCarroId'].setValue(0)
    this.form.controls['locadoraId'].setValue(0)
  }

}
