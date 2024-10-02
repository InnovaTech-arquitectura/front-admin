import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PerfilNuevoEmpleadoComponent } from './perfil-nuevo-empleado.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('PerfilNuevoEmpleadoComponent', () => {
  let component: PerfilNuevoEmpleadoComponent;
  let fixture: ComponentFixture<PerfilNuevoEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilNuevoEmpleadoComponent],
      imports: [RouterTestingModule, HttpClientModule, FormsModule],  // Add RouterTestingModule here
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
