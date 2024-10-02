import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EditarPlanComponent } from './editar-plan.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PlanesService } from 'src/app/service/planes.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('EditarPlanComponent', () => {
  let component: EditarPlanComponent;
  let fixture: ComponentFixture<EditarPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPlanComponent ], // Asegúrate de que el componente esté declarado
      imports: [RouterTestingModule, HttpClientModule, FormsModule],  // Add RouterTestingModule here
      providers: [ 
        PlanesService, 
        {
          provide: ActivatedRoute, // Simula ActivatedRoute con un valor
          useValue: {
            paramMap: of({
              get: (key: string) => '1' // Simula un ID o parámetro
            })
          }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Ignora componentes personalizados como 'app-header'
    })
    .compileComponents(); // Compila los componentes y los módulos importados
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPlanComponent); // Crea la instancia del componente
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta cambios para inicializar la vista
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Prueba básica para verificar que el componente se cree correctamente
  });
});