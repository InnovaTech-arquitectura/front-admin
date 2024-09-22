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

import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { VerBannersComponent } from './publicidad/ver-banners/ver-banners.component';
import { NuevoBannerComponent } from './publicidad/nuevo-banner/nuevo-banner.component';
import { FinanzasComponent } from './finanzas/finanzas.component';
import { LineChartComponent } from './componentTools/line-chart/line-chart.component';
import { BarChartComponent } from './componentTools/bar-chart/bar-chart.component';
import { PieChartComponent } from './componentTools/pie-chart/pie-chart.component';



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

    InicioSesionComponent,
    VerBannersComponent,
    NuevoBannerComponent,
    FinanzasComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
