import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VerPlanesComponent } from './planes/ver-planes/ver-planes.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';

import { VerPerfilesComponent } from './perfiles/ver-perfiles/ver-perfiles.component';
import { PerfilTipoComponent } from './perfiles/perfil-tipo/perfil-tipo.component';
import { PerfilNuevoEmpleadoComponent } from './perfiles/perfil-nuevo-empleado/perfil-nuevo-empleado.component';
import { PerfilEditarEmpleadoComponent } from './perfiles/perfil-editar-empleado/perfil-editar-empleado.component';

import { VerEmprendimeintosComponent } from './emprendimientos/ver-emprendimeintos/ver-emprendimeintos.component';
import { StatsEmprendimientoComponent } from './emprendimientos/stats-emprendimiento/stats-emprendimiento.component';


const routes: Routes = [
  { path: 'planes', component: VerPlanesComponent },
  { path: 'planes/edit/:id', component: EditarPlanComponent },
  { path: 'planes/add', component: CrearPlanComponent },

  { path: 'perfiles', component: VerPerfilesComponent },
  { path: 'perfiles/add', component: PerfilNuevoEmpleadoComponent },
  { path: 'perfiles/:tipo', component: PerfilTipoComponent },
  { path: 'perfiles/:id/edit', component: PerfilEditarEmpleadoComponent },

  { path: 'emprendimientos', component: VerEmprendimeintosComponent },
  { path: 'emprendimientos/:id', component: StatsEmprendimientoComponent },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
