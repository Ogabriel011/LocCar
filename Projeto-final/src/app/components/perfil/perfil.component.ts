import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { PerfilService } from '../../Services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {

  listaPerfil: any;
  idElemento!: number;
  form!: FormGroup;


  constructor(private servicoperfil: PerfilService, private formBuilder: FormBuilder) { }

  //Métod que é executado quando o componente abre
  ngOnInit(){

    this.form = this.formBuilder.group({

      nome:'',
      telefone:'',
      email:''


    })

    this.listarPerfil()
  }

  listarPerfil() {
    this.servicoperfil.getPerfil().subscribe({
      next:(dados: any) => {
        this.listaPerfil = dados;
        console.log(this.listaPerfil);
      },
      error: (e: any) => {
        console.log("Algo deu errado!" + e)
      }
    })
  }

  cadastrarPerfil() {

    let nomeInput = this.form.controls["nome"].value
    let telefoneInput = this.form.controls["telefone"].value
    let emailInput = this.form.controls["email"].value

    let dados = {

      Id: 3,
      nome: nomeInput,
      telefone: telefoneInput,
      email: emailInput

    }

    this.servicoperfil.postperfil(dados).subscribe({
      next: (dados: any) => {
        console.log(dados);
        this.listarPerfil()
      },
      error: (e: any) =>{
        console.log("Algo deu errado!" + e)
      }
    })
  }

  deletarPerfil(Id: number){
    this.servicoperfil.deletePerfil(Id).subscribe({
      next: (d: any) => {
        console.log(d);
        this.listarPerfil()
      },
      error: (e: any) => {
        console.log("Algo deu errado!" + e);
      }
    })
  }
  pegarDados(dados: any){

    this,this.idElemento = dados.id;
    this.form.controls["nome"].setValue(dados.nome);
    this.form.controls["telefone"].setValue(dados.telefone);
    this.form.controls["email"].setValue(dados.email)

  }
  editarPerfil(){
    let nomeInput = this.form.controls["nome"].value
    let telefoneInput = this.form.controls["telefone"].value
    let emailInput = this.form.controls["email"].value

    let dados = {
      id: this.idElemento,
      nome: nomeInput,
      telefone: telefoneInput,
      email: emailInput
    }
    
    this.servicoperfil.editarPerfil(dados).subscribe({
      next: (d: any) => {
        console.log(dados);
        this.listarPerfil()
      },
      error: (e: any) => {
        console.log("Algo deu errado!" + e);
      }
    })
  }
}
