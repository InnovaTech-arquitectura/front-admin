import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importar HttpClientTestingModule
import { VerPerfilesComponent } from './ver-perfiles.component';
import { PerfilesService } from 'src/app/service/perfiles.service'; // Asegúrate de la ruta correcta de PerfilesService

describe('VerPerfilesComponent', () => {
  let component: VerPerfilesComponent;
  let fixture: ComponentFixture<VerPerfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerPerfilesComponent],
      imports: [
        RouterTestingModule, // Importa RouterTestingModule
        HttpClientTestingModule // Importa HttpClientTestingModule
      ],
      providers: [PerfilesService], // Proveer PerfilesService
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Agrega CUSTOM_ELEMENTS_SCHEMA
    });
    fixture = TestBed.createComponent(VerPerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
