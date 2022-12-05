import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from  '@angular/forms';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './components/footer/footer.component';
import { LocadoraComponent } from './components/locadora/locadora.component';
import { HeaderComponent } from './components/header/header.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReservasComponent } from './components/reservas/reservas.component';
import { ReservasClienteComponent } from './components/reservas-cliente/reservas-cliente.component';
import { CarrosComponent } from './components/carros/carros.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CarrosClienteComponent } from './components/carros-cliente/carros-cliente.component';
import { HeaderClientesComponent } from './components/header-clientes/header-clientes.component';
@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    CadastrarComponent,
    HomeComponent,
    LoginComponent,
    CarrosClienteComponent,
    FooterComponent,
    LocadoraComponent,
    PerfilUsuarioComponent,
    HeaderComponent,
    ReservasComponent,
    ReservasClienteComponent,
    CarrosComponent,
    HeaderClientesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
   HttpClientModule,
   ReactiveFormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
