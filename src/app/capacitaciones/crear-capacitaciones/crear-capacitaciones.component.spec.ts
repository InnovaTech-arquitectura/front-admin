import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Importa CUSTOM_ELEMENTS_SCHEMA
import { RouterModule } from '@angular/router'; // Importa RouterModule para manejar routerLink
import { HttpClientModule } from '@angular/common/http'; // Añadido si se utiliza HttpClient
import { FormsModule } from '@angular/forms'; // Añadido si utiliza ngModel o formularios
import { CrearCapacitacionesComponent } from './crear-capacitaciones.component';

describe('CrearCapacitacionesComponent', () => {
  let component: CrearCapacitacionesComponent;
  let fixture: ComponentFixture<CrearCapacitacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCapacitacionesComponent],
      imports: [
        RouterModule.forRoot([]), // Importa RouterModule para que Angular reconozca routerLink
        HttpClientModule, // Añadido si el componente usa HttpClient
        FormsModule // Añadido si el componente usa formularios o ngModel
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Sigue permitiendo elementos desconocidos como 'app-header'
    });
    fixture = TestBed.createComponent(CrearCapacitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
