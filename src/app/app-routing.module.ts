import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerPlanesComponent } from './planes/ver-planes/ver-planes.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { VerPerfilesComponent } from './perfiles/ver-perfiles/ver-perfiles.component';
import { PerfilTipoComponent } from './perfiles/perfil-tipo/perfil-tipo.component';
import { VerBazaresComponent } from './bazares/ver-bazares/ver-bazares.component';
import { DetallesBazarComponent } from './bazares/detalles-bazar/detalles-bazar.component';
import { CrearBazarComponent } from './bazares/crear-bazar/crear-bazar.component';
import { EditarBazarComponent } from './bazares/editar-bazar/editar-bazar.component';
import { VerCuponesComponent } from './cupones/ver-cupones/ver-cupones.component';
import { EditarCuponComponent } from './cupones/editar-cupon/editar-cupon.component';
import { CrearCuponComponent } from './cupones/crear-cupon/crear-cupon.component';
import { VerCapacitacionesComponent } from './capacitaciones/ver-capacitaciones/ver-capacitaciones.component';
import { CrearCapacitacionesComponent } from './capacitaciones/crear-capacitaciones/crear-capacitaciones.component';
import { EditarCapacitacionesComponent } from './capacitaciones/editar-capacitaciones/editar-capacitaciones.component';
import { VerInfoCapacitacionesComponent } from './capacitaciones/ver-info-capacitaciones/ver-info-capacitaciones.component';
import { RecuperarComponent } from './recuperar-password/recuperar/recuperar.component';
import { VerificacionComponent } from './recuperar-password/verificacion/verificacion.component';
import { CrearComponent } from './recuperar-password/crear/crear.component';
import { ResponderPreguntaComponent } from './soporte/responder-pregunta/responder-pregunta.component';


const routes: Routes = [
  { path: 'planes', component: VerPlanesComponent },
  { path: 'planes/edit/:id', component: EditarPlanComponent },
  { path: 'planes/add', component: CrearPlanComponent },
  { path: 'perfiles', component: VerPerfilesComponent },
  { path: 'perfiles/:tipo', component: PerfilTipoComponent },
	{ path: 'bazares', component: VerBazaresComponent },
  { path: 'bazares/add', component: CrearBazarComponent },
  { path: 'bazares/:id', component: DetallesBazarComponent },
	{ path: 'bazares/edit/:id', component: EditarBazarComponent },
	{ path: 'cupones', component: VerCuponesComponent },
	{ path: 'cupones/edit/:id', component: EditarCuponComponent },
	{ path: 'cupones/add', component: CrearCuponComponent }
  { path: 'capacitaciones', component: VerCapacitacionesComponent },
  { path: 'capacitaciones/add', component:  CrearCapacitacionesComponent},
  { path: 'capacitaciones/edit/:id', component:  EditarCapacitacionesComponent},
  { path: 'capacitaciones/info', component:  VerInfoCapacitacionesComponent},
  { path: 'recuperar-password/recuperar', component:  RecuperarComponent},
  { path: 'recuperar-password/verificacion', component:  VerificacionComponent},
  { path: 'recuperar-password/crear', component:  CrearComponent},
  { path: 'soporte/responder', component:  ResponderPreguntaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
