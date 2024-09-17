import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './componentTools/header/header.component';
import { SidebarComponent } from './componentTools/sidebar/sidebar.component';
import { VerPlanesComponent } from './planes/ver-planes/ver-planes.component';

const routes: Routes = [
  { path: 'planes', component: VerPlanesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
