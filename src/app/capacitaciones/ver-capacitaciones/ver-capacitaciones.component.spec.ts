import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Importa CUSTOM_ELEMENTS_SCHEMA
import { RouterModule } from '@angular/router'; // Importa RouterModule para manejar routerLink
import { VerCapacitacionesComponent } from './ver-capacitaciones.component';

describe('VerCapacitacionesComponent', () => {
  let component: VerCapacitacionesComponent;
  let fixture: ComponentFixture<VerCapacitacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerCapacitacionesComponent],
      imports: [RouterModule.forRoot([])], // Importa RouterModule para que Angular reconozca routerLink
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Sigue permitiendo elementos desconocidos como 'app-header'
    });
    fixture = TestBed.createComponent(VerCapacitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
