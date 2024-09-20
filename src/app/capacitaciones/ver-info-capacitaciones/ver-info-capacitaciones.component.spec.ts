import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { VerInfoCapacitacionesComponent } from './ver-info-capacitaciones.component';

describe('VerInfoCapacitacionesComponent', () => {
  let component: VerInfoCapacitacionesComponent;
  let fixture: ComponentFixture<VerInfoCapacitacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerInfoCapacitacionesComponent],
      imports: [RouterModule.forRoot([])], // Agrega RouterModule aquí
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Esto permite el uso de 'app-header'
    });
    fixture = TestBed.createComponent(VerInfoCapacitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
