import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarCapacitacionesComponent } from './editar-capacitaciones.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('EditarCapacitacionesComponent', () => {
  let component: EditarCapacitacionesComponent;
  let fixture: ComponentFixture<EditarCapacitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarCapacitacionesComponent],
      imports: [RouterTestingModule,
        HttpClientModule,
        FormsModule, 
      ],
      providers: [
        {
          provide: ActivatedRoute, // Simula ActivatedRoute con un valor
          useValue: {
            paramMap: of({
              get: (key: string) => '1' // Simula un parámetro como un ID
            })
          }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Permite elementos personalizados
    }).compileComponents();

    fixture = TestBed.createComponent(EditarCapacitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta cambios para inicializar la vista
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
