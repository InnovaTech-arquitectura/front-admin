import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearComponent } from './crear.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importamos HttpClientTestingModule para pruebas de HttpClient
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Añadimos CUSTOM_ELEMENTS_SCHEMA
import { FormsModule } from '@angular/forms'; // Importamos FormsModule para el uso de ngModel

describe('CrearComponent', () => {
  let component: CrearComponent;
  let fixture: ComponentFixture<CrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearComponent],
      imports: [HttpClientTestingModule, FormsModule], // Importamos FormsModule para evitar el error de ngModel
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Añadimos el esquema para evitar problemas con componentes personalizados
    });
    fixture = TestBed.createComponent(CrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
