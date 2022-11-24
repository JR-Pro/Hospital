import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { EspecialidaddesComponent } from './especialidaddes/especialidaddes.component';
import { HomeComponent } from './home/home.component';
import { Medico } from './medico';
import { MedicoComponent } from './medico/medico.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { RegistrarMedicoComponent } from './registrar-medico/registrar-medico.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'listMedic', component: MedicoComponent},
  {path: '',redirectTo: 'list',pathMatch: 'full'},
  {path: 'listPacie', component: PacientesComponent},
  {path: '',redirectTo: 'lista',pathMatch: 'full'},
  {path: 'listEspeci', component: EspecialidaddesComponent},
  {path: '',redirectTo: 'lis',pathMatch: 'full'},
  {path: 'listConsu', component: ConsultaComponent},
  {path: '',redirectTo: 'list1',pathMatch: 'full'},
  {path: 'registrar-medico', component: RegistrarMedicoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
