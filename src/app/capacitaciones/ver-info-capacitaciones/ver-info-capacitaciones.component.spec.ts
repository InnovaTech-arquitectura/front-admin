import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { VerInfoCapacitacionesComponent } from './ver-info-capacitaciones.component';
import { HttpClientModule } from '@angular/common/http'; // Agregado si se usan solicitudes HTTP
import { FormsModule } from '@angular/forms'; // Agregado si se usan formularios o ngModel

describe('VerInfoCapacitacionesComponent', () => {
  let component: VerInfoCapacitacionesComponent;
  let fixture: ComponentFixture<VerInfoCapacitacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerInfoCapacitacionesComponent],
      imports: [
        RouterModule.forRoot([]), // Agregado para manejar rutas
        HttpClientModule, // Añadido si usas HttpClient
        FormsModule // Añadido si usas formularios o ngModel
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Se mantiene para permitir componentes personalizados como 'app-header'
    });
    fixture = TestBed.createComponent(VerInfoCapacitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
