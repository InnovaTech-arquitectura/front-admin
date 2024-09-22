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
import { PerfilNuevoEmpleadoComponent } from './perfiles/perfil-nuevo-empleado/perfil-nuevo-empleado.component';
import { PerfilEditarEmpleadoComponent } from './perfiles/perfil-editar-empleado/perfil-editar-empleado.component';
import { VerEmprendimeintosComponent } from './emprendimientos/ver-emprendimeintos/ver-emprendimeintos.component';
import { StatsEmprendimientoComponent } from './emprendimientos/stats-emprendimiento/stats-emprendimiento.component';

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
    PerfilNuevoEmpleadoComponent,
    PerfilEditarEmpleadoComponent,
    VerEmprendimeintosComponent,
    StatsEmprendimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
