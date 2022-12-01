import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LocalStorageService } from '../../services/local-storage.service'
import { usuarioService } from "../../services/usuarios.service"

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

  constructor(private formBuilder: FormBuilder, private logarUsers: usuarioService, private localStorage: LocalStorageService) { }

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

        this.localStorage.set("id", usuario.id)

        this.localStorage.set("email", usuario.email)

        this.localStorage.set("telefone", usuario.telefone)
        
        console.log(this.localStorage.get("email"));
        console.log(this.localStorage.get("id"));
        console.log(this.localStorage.get("telefone"));
        
        return
      } 
      
      }
      this.erro = "Email ou Senha Incorretos, Tente Novamente"
    }
    
      

 

}
