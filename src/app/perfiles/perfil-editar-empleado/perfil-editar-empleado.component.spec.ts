import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PerfilEditarEmpleadoComponent } from './perfil-editar-empleado.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PerfilEditarEmpleadoComponent', () => {
  let component: PerfilEditarEmpleadoComponent;
  let fixture: ComponentFixture<PerfilEditarEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilEditarEmpleadoComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(PerfilEditarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
