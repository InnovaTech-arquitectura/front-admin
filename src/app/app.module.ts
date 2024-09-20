import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentTools/header/header.component';
import { SidebarComponent } from './componentTools/sidebar/sidebar.component';
import { VerPlanesComponent } from './planes/ver-planes/ver-planes.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { VerPerfilesComponent } from './perfiles/ver-perfiles/ver-perfiles.component';
import { PerfilTipoComponent } from './perfiles/perfil-tipo/perfil-tipo.component';
import { VerCapacitacionesComponent } from './capacitaciones/ver-capacitaciones/ver-capacitaciones.component';
import { CrearCapacitacionesComponent } from './capacitaciones/crear-capacitaciones/crear-capacitaciones.component';
import { EditarCapacitacionesComponent } from './capacitaciones/editar-capacitaciones/editar-capacitaciones.component';
import { VerInfoCapacitacionesComponent } from './capacitaciones/ver-info-capacitaciones/ver-info-capacitaciones.component';
import { RecuperarComponent } from './recuperar-password/recuperar/recuperar.component';
import { VerificacionComponent } from './recuperar-password/verificacion/verificacion.component';
import { CrearComponent } from './recuperar-password/crear/crear.component';
import { ResponderPreguntaComponent } from './soporte/responder-pregunta/responder-pregunta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    VerPlanesComponent,
    EditarPlanComponent,
    CrearPlanComponent,
    VerPerfilesComponent,
    PerfilTipoComponent,
    VerCapacitacionesComponent,
    CrearCapacitacionesComponent,
    EditarCapacitacionesComponent,
    VerInfoCapacitacionesComponent,
    RecuperarComponent,
    VerificacionComponent,
    CrearComponent,
    ResponderPreguntaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
