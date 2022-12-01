import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocadoraComponent } from "./components/locadora/locadora.component";
import { ReservasComponent } from "./components/reservas/reservas.component";
import { PerfilUsuarioComponent } from "./components/perfil-usuario/perfil-usuario.component";
import { ReservasClienteComponent } from "./components/reservas-cliente/reservas-cliente.component";
import { CarrosComponent } from './components/carros/carros.component';
import { CarrosClienteComponent } from './components/carros-cliente/carros-cliente.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
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
  },
  {
    path: 'carros-cliente', component: CarrosClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
