import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilNuevoEmpleadoComponent } from './perfil-nuevo-empleado.component';

describe('PerfilNuevoEmpleadoComponent', () => {
  let component: PerfilNuevoEmpleadoComponent;
  let fixture: ComponentFixture<PerfilNuevoEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilNuevoEmpleadoComponent]
    });
    fixture = TestBed.createComponent(PerfilNuevoEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
