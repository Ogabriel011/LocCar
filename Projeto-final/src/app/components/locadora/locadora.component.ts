import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Locadoras } from 'src/app/models/locadora.model';
import { LocadoraService } from 'src/app/services/locadora.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-locadora',
  templateUrl: './locadora.component.html',
  styleUrls: ['./locadora.component.scss']
})
export class LocadoraComponent implements OnInit {
  locadoras!: Locadoras[];
  form!: FormGroup;
  id!: number;
  botaoEditar: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private locadoraService: LocadoraService
  ) { }


  listarLocadoras(): void {
    this.locadoraService.lerLocadoras().subscribe({
      next: (locadoras: Locadoras[]) => {
        this.locadoras = locadoras
        console.log(this.locadoras);
      },
      error: () => {
        console.log("erro em ler locadoras");
      }
    })
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome:"", endereco:"", telefone:""
    })
    this.form.valueChanges.subscribe(console.log);

    this.listarLocadoras()
  }

  salvarDadosLocadoras() {
    
    let id: number;

    if (this.locadoras.length === 0) {
      id = 1
    }
    else{
      id = (this.locadoras[this.locadoras.length - 1].id) + 1; 
    }
    
    let valores: Locadoras = { id: id, nome: this.form.value.nome, endereco: this.form.value.endereco, telefone: this.form.value.telefone}

    this.locadoraService.salvarLocadoras(valores).subscribe({
      next: () => {
        this.listarLocadoras();
        console.log("salvou");
        this.form.reset()
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: 'success',
          timer: 5000,
          title: 'Locadora Cadastrada!'
        })
      },
      error: () => {
        console.log("erro em Salvar Locadoras");
      }
    })
  }

  excluir(idLocadora:number)  {
    this.locadoraService.deletarLocadoras(idLocadora).subscribe({
      next: () => {
        console.log("excluiu");
        this.listarLocadoras();
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: 'success',
          timer: 5000,
          title: 'Locadora excluida!'
        })
      },
      error: () => {
        console.log("erro em excluir");
        
      }
    })
  }

  trackUser(index:number,locadora:Locadoras){
    return locadora? locadora.id : null;
  }

  editarLocadora(){
    let id = this.id;
    let nome = this.form.controls["nome"].value;
    let endereco = this.form.controls["endereco"].value;
    let telefone = this.form.controls["telefone"].value;

    let locadora:Locadoras ={id:id, nome:nome,  endereco:endereco, telefone:telefone}

    this.locadoraService.editarLocadoras(locadora).subscribe({
      next: () => {
        this.listarLocadoras()
        console.log("editou");
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: 'success',
          timer: 5000,
          title: 'Locadora Editada!'
        })
      },
      error: () => {
        console.log("erro em editar");
      }
    })
    this.botaoEditar = false
    this.form.reset()
  }

  alterarDadosLocadora(dadosLocadora: Locadoras){
    this.id = dadosLocadora.id
    this.form.controls["nome"].setValue(dadosLocadora.nome)
    this.form.controls["endereco"].setValue(dadosLocadora.endereco)
    this.form.controls["telefone"].setValue(dadosLocadora.telefone)
    this.botaoEditar = true
  }
}
