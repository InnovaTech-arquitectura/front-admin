import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PerfilNuevoEmpleadoComponent } from './perfil-nuevo-empleado.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PerfilNuevoEmpleadoComponent', () => {
  let component: PerfilNuevoEmpleadoComponent;
  let fixture: ComponentFixture<PerfilNuevoEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilNuevoEmpleadoComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(PerfilNuevoEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
