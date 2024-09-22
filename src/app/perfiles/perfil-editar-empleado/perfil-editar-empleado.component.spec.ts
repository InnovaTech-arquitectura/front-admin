import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEditarEmpleadoComponent } from './perfil-editar-empleado.component';

describe('PerfilEditarEmpleadoComponent', () => {
  let component: PerfilEditarEmpleadoComponent;
  let fixture: ComponentFixture<PerfilEditarEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilEditarEmpleadoComponent]
    });
    fixture = TestBed.createComponent(PerfilEditarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
