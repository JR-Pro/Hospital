import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms"
import { MedicoComponent } from './medico/medico.component'
import { HttpClientModule } from "@angular/common/http";

import { PacientesComponent } from './pacientes/pacientes.component';
import { EspecialidaddesComponent } from './especialidaddes/especialidaddes.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { HomeComponent } from './home/home.component';
import { RegistroPComponent } from './pacientes/registro-p/registro-p.component';
import { RegistroMComponent } from './medico/registro-m/registro-m.component';
import { RegistroEComponent } from './especialidaddes/registro-e/registro-e.component';
import { RegistroCComponent } from './consulta/registro-c/registro-c.component';




@NgModule({
  declarations: [
    AppComponent,
    MedicoComponent,
    PacientesComponent,
    EspecialidaddesComponent,
    ConsultaComponent,
    HomeComponent,
    RegistroPComponent,
    RegistroMComponent,
    RegistroEComponent,
    RegistroCComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
