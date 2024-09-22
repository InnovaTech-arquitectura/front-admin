import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Importa CUSTOM_ELEMENTS_SCHEMA
import { RouterModule } from '@angular/router'; // Importa RouterModule para manejar routerLink
import { RecuperarComponent } from './recuperar.component';

describe('RecuperarComponent', () => {
  let component: RecuperarComponent;
  let fixture: ComponentFixture<RecuperarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperarComponent],
      imports: [RouterModule.forRoot([])], // Importa RouterModule para que Angular reconozca routerLink
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Usa CUSTOM_ELEMENTS_SCHEMA si es necesario
    });
    fixture = TestBed.createComponent(RecuperarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
