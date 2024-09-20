import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCapacitacionesComponent } from './editar-capacitaciones.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('EditarCapacitacionesComponent', () => {
  let component: EditarCapacitacionesComponent;
  let fixture: ComponentFixture<EditarCapacitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarCapacitacionesComponent],
      imports: [ RouterTestingModule ],
      providers: [
        {
          provide: ActivatedRoute, // Simula ActivatedRoute con un valor
          useValue: {
            paramMap: of({
              get: (key: string) => '1' // Simula un ID o parámetro
            })
          }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();;
    fixture = TestBed.createComponent(EditarCapacitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCapacitacionesComponent); // Crea la instancia del componente
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta cambios para inicializar la vista
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
