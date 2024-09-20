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
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { VerBannersComponent } from './publicidad/ver-banners/ver-banners.component';
import { NuevoBannerComponent } from './publicidad/nuevo-banner/nuevo-banner.component';

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
    InicioSesionComponent,
    VerBannersComponent,
    NuevoBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
