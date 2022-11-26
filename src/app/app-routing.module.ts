import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { EspecialidaddesComponent } from './especialidaddes/especialidaddes.component';
import { HomeComponent } from './home/home.component';
import { MedicoComponent } from './medico/medico.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { RegistroPComponent } from './pacientes/registro-p/registro-p.component';
import { RegistroMComponent } from './medico/registro-m/registro-m.component';
import { RegistroEComponent } from './especialidaddes/registro-e/registro-e.component';
import { RegistroCComponent } from './consulta/registro-c/registro-c.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'listMedic', component: MedicoComponent},
  {path: 'listPacie', component: PacientesComponent},
  {path: 'listEspeci', component: EspecialidaddesComponent},
  {path: 'listConsu', component: ConsultaComponent},
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: 'añadirP', component: RegistroPComponent},
  {path: 'añadirP/:dato', component: RegistroPComponent},
  {path: 'anadirm', component: RegistroMComponent },
  {path: 'anadire', component: RegistroEComponent},
  { path: 'anadirc', component:RegistroCComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
