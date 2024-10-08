import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerBannersComponent } from './ver-banners.component';
import { HeaderComponent } from 'src/app/componentTools/header/header.component';
import { SidebarComponent } from 'src/app/componentTools/sidebar/sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa el módulo de HttpClient para testing
import { PublicidadService } from 'src/app/service/publicidad.service'; // Importa el servicio de Publicidad
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Importa el schema

describe('VerBannersComponent', () => {
  let component: VerBannersComponent;
  let fixture: ComponentFixture<VerBannersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerBannersComponent, HeaderComponent, SidebarComponent],
      imports: [RouterTestingModule, HttpClientTestingModule], // Importa el módulo de HttpClientTestingModule
      providers: [PublicidadService], // Agrega PublicidadService como proveedor
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Añade el esquema para evitar problemas con componentes personalizados
    });
    fixture = TestBed.createComponent(VerBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
