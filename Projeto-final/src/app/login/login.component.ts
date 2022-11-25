import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { usuarioService } from '../Services/usuarios.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Váriáveis

  form!: FormGroup;
  
  listaUsuarios: any;

  erro: string = "";

  constructor(private formBuilder: FormBuilder, private logarUsers: usuarioService) { }

  ngOnInit(): void {
    // Chamar as funções de Login
    this.form = this.formBuilder.group({
      email: new FormControl(''),
      senha: new FormControl(''),
    })

    this.lerUsuarios();
  }

  // Ler Usuarios
  lerUsuarios() {
    this.logarUsers.getUsuarios().subscribe({
      next: (dados: any) => {
        this.listaUsuarios = dados

        console.log(this.listaUsuarios);
      },
      error: (erro) => {
        console.log(erro);
      }

    })
  }

  logar(){
    for(let usuario of this.listaUsuarios) {
       if(usuario.email === this.form.controls["email"].value && usuario.senha === this.form.controls["senha"].value) { 
        const login = true

        console.log("Login Feito Com Sucesso");

        return
      } 
      
      }
      this.erro = "Email ou Senha Incorretos, Tente Novamente"
    }
    
      

 

}
