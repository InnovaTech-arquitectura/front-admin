import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa el módulo de pruebas de HttpClient

import { VerCuponesComponent } from './ver-cupones.component';
import { CuponesService } from 'src/app/service/cupones.service'; // Importa el servicio que estás utilizando

describe('VerCuponesComponent', () => {
  let component: VerCuponesComponent;
  let fixture: ComponentFixture<VerCuponesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerCuponesComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule, // Asegúrate de importar HttpClientTestingModule aquí
      ],
      providers: [CuponesService], // Proveedor para CuponesService
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(VerCuponesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
