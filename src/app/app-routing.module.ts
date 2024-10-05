import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { VerPlanesComponent } from './planes/ver-planes/ver-planes.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';

import { VerPerfilesComponent } from './perfiles/ver-perfiles/ver-perfiles.component';
import { PerfilTipoComponent } from './perfiles/perfil-tipo/perfil-tipo.component';
import { PerfilNuevoEmpleadoComponent } from './perfiles/perfil-nuevo-empleado/perfil-nuevo-empleado.component';
import { PerfilEditarEmpleadoComponent } from './perfiles/perfil-editar-empleado/perfil-editar-empleado.component';

import { VerEmprendimeintosComponent } from './emprendimientos/ver-emprendimeintos/ver-emprendimeintos.component';
import { StatsEmprendimientoComponent } from './emprendimientos/stats-emprendimiento/stats-emprendimiento.component';


import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { VerBannersComponent } from './publicidad/ver-banners/ver-banners.component';
import { NuevoBannerComponent } from './publicidad/nuevo-banner/nuevo-banner.component';
import { FinanzasComponent } from './finanzas/finanzas.component';
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
import { SoportePrincipalComponent } from './soporte/soporte-principal/soporte-principal.component';



import { GraphsComponent } from './dashboard/graphs/graphs.component';




const routes: Routes = [
  { path: 'planes', component: VerPlanesComponent, canActivate: [AuthGuard] }, 
  { path: 'planes/edit/:id', component: EditarPlanComponent, canActivate: [AuthGuard] },
  { path: 'planes/add', component: CrearPlanComponent, canActivate: [AuthGuard] },
  { path: 'perfiles', component: VerPerfilesComponent, canActivate: [AuthGuard] },
  { path: 'perfiles/add', component: PerfilNuevoEmpleadoComponent, canActivate: [AuthGuard] },
  { path: 'perfiles/:tipo', component: PerfilTipoComponent, canActivate: [AuthGuard] },
  { path: 'perfiles/:id/edit', component: PerfilEditarEmpleadoComponent, canActivate: [AuthGuard] },
  { path: 'emprendimientos', component: VerEmprendimeintosComponent, canActivate: [AuthGuard] },
  { path: 'emprendimientos/:id', component: StatsEmprendimientoComponent, canActivate: [AuthGuard] },
  { path: 'publicidad', component: VerBannersComponent, canActivate: [AuthGuard] },
  { path: 'nuevo-banner', component: NuevoBannerComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: GraphsComponent, canActivate: [AuthGuard] },
  { path: 'finanzas', component: FinanzasComponent, canActivate: [AuthGuard] },
  { path: 'bazares', component: VerBazaresComponent, canActivate: [AuthGuard] },
  { path: 'bazares/add', component: CrearBazarComponent, canActivate: [AuthGuard] },
  { path: 'bazares/:id', component: DetallesBazarComponent, canActivate: [AuthGuard] },
  { path: 'bazares/edit/:id', component: EditarBazarComponent, canActivate: [AuthGuard] },
  { path: 'cupones', component: VerCuponesComponent, canActivate: [AuthGuard] },
  { path: 'cupones/edit/:id', component: EditarCuponComponent, canActivate: [AuthGuard] },
  { path: 'cupones/add', component: CrearCuponComponent, canActivate: [AuthGuard] },
  { path: 'capacitaciones', component: VerCapacitacionesComponent, canActivate: [AuthGuard] },
  { path: 'capacitaciones/add', component: CrearCapacitacionesComponent, canActivate: [AuthGuard] },
  { path: 'capacitaciones/edit/:id', component: EditarCapacitacionesComponent, canActivate: [AuthGuard] },
  { path: 'capacitaciones/info/:id', component: VerInfoCapacitacionesComponent, canActivate: [AuthGuard] },
  { path: 'soporte/responder', component: ResponderPreguntaComponent, canActivate: [AuthGuard] },
  { path: 'soporte', component: SoportePrincipalComponent, canActivate: [AuthGuard] },
  { path: 'login', component: InicioSesionComponent },
  { path: 'recuperar-password/recuperar', component: RecuperarComponent },
  { path: 'recuperar-password/verificacion', component: VerificacionComponent },
  { path: 'recuperar-password/crear', component: CrearComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
