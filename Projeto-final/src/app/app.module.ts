import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from  '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { LocadoraComponent } from './components/locadora/locadora.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReservasComponent } from './components/reservas/reservas.component';
import { ReservasClienteComponent } from './components/reservas-cliente/reservas-cliente.component';
import { CarrosComponent } from './components/carros/carros.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CarrosClienteComponent } from './components/carros-cliente/carros-cliente.component';
@NgModule({
  declarations: [
    AppComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
