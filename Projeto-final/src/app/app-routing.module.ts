import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocadoraComponent } from "./components/locadora/locadora.component";
import { ReservasComponent } from "./components/reservas/reservas.component";
import { PerfilUsuarioComponent } from "./components/perfil-usuario/perfil-usuario.component";
import { ReservasClienteComponent } from "./components/reservas-cliente/reservas-cliente.component";
import { CarrosComponent } from './components/carros/carros.component';
    

const routes: Routes = [
  {
    path: '', redirectTo: 'locadoras', pathMatch: 'full'
  },
  // {
  //   path: 'home', component: HomeComponent
  // },
  {
    path: 'locadoras', component: LocadoraComponent
  },
  {
    path: 'reservas', component: ReservasComponent
  },
  {
    path: 'carros', component: CarrosComponent
  },
  {
    path: 'perfil-usuario', component: PerfilUsuarioComponent
  },
  {
    path: 'reservas-cliente', component: ReservasClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
