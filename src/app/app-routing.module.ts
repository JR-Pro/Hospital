import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { EspecialidaddesComponent } from './especialidaddes/especialidaddes.component';
import { Medico } from './medico';
import { MedicoComponent } from './medico/medico.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { RegistrarMedicoComponent } from './registrar-medico/registrar-medico.component';

const routes: Routes = [
  {path: 'list', component: MedicoComponent},
  {path: '',redirectTo: 'list',pathMatch: 'full'},
  {path: 'lista', component: PacientesComponent},
  {path: '',redirectTo: 'lista',pathMatch: 'full'},
  {path: 'lis', component: EspecialidaddesComponent},
  {path: '',redirectTo: 'lis',pathMatch: 'full'},
  {path: 'list1', component: ConsultaComponent},
  {path: '',redirectTo: 'list1',pathMatch: 'full'},
  {path: 'registrar-medico', component: RegistrarMedicoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
