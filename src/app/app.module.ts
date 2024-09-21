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
import { VerBazaresComponent } from './bazares/ver-bazares/ver-bazares.component';
import { DetallesBazarComponent } from './bazares/detalles-bazar/detalles-bazar.component';
import { CrearBazarComponent } from './bazares/crear-bazar/crear-bazar.component';
import { EditarBazarComponent } from './bazares/editar-bazar/editar-bazar.component';
import { VerCuponesComponent } from './cupones/ver-cupones/ver-cupones.component';
import { EditarCuponComponent } from './cupones/editar-cupon/editar-cupon.component';
import { CrearCuponComponent } from './cupones/crear-cupon/crear-cupon.component';

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
    VerBazaresComponent,
    DetallesBazarComponent,
    CrearBazarComponent,
    EditarBazarComponent,
    VerCuponesComponent,
    EditarCuponComponent,
    CrearCuponComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
