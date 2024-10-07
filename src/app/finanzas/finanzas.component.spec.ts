import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FinanzasComponent } from './finanzas.component';
import { FinanzasService } from '../service/finanzas.service'; // Import your service
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

describe('FinanzasComponent', () => {
  let component: FinanzasComponent;
  let fixture: ComponentFixture<FinanzasComponent>;
  let finanzasServiceStub: Partial<FinanzasService>;

  beforeEach(() => {
    finanzasServiceStub = {
      getIncomeByYear: () => of({
        data: [12775, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        label: 'Ingresos Anuales 2024',
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
      }),
      getExpensesByYear: () => of({
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 0, 0],
        label: 'Gastos Anuales 2024',
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
      }),
      getIncomeByPlan: () => of({
        data: [390.0, 510.0, 375.0],
        label: 'Ingresos por plan en 2024',
        labels: ['Plan 1', 'Plan 2', 'Plan 3']
      }),
      getUsersByPlan: () => of({
        data: [3, 4, 3],
        label: 'Usuarios por plan en 2024',
        labels: ['Plan 1', 'Plan 2', 'Plan 3']
      }),
    };

    TestBed.configureTestingModule({
      declarations: [FinanzasComponent],
      imports: [RouterTestingModule, HttpClientModule, FormsModule], // Add FormsModule here
      providers: [{ provide: FinanzasService, useValue: finanzasServiceStub }], // Use the stub service
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    
    fixture = TestBed.createComponent(FinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // You can add more tests that verify the component's behavior if needed.
});
