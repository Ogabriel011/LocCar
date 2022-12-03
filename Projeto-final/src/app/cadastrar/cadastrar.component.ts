import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from '../usuario.service'

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  listaUsuarios: any;

  form!: FormGroup;

  constructor(private serviceUsuario: UsuarioService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      nome: '',
      email: '',
      telefone: '',
      senha: ''
    })

    this.listarUsuario()
  }

  listarUsuario() {
    this.serviceUsuario.getUsuarios().subscribe({
      next: (d: any) => {
        this.listaUsuarios = d;
        console.log(this.listaUsuarios);

      },
      error: (e: any) => {
        console.log("algo deu errado" + e);
      }
    })
  }

  cadastrarDadosUsuarios() {

    let nomeInput = this.form.controls["nome"].value
    let emailInput = this.form.controls["email"].value
    let telefoneInput = this.form.controls["telefone"].value
    let senhaInput =  this.form.controls["senha"].value

    let dados = {
      nome: nomeInput,
      email: emailInput,
      telefone: telefoneInput,
      senha: senhaInput
    }
    
    this.serviceUsuario.postUsuarios(dados).subscribe({
      next: (d: any) => {
        console.log(d);
        this.listarUsuario()
      },
      error: (e: any) => {
        console.log("algo deu errado" + e);
      }
    })
  }
}
