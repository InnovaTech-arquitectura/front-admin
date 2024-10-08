import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Importa CUSTOM_ELEMENTS_SCHEMA
import { RouterModule } from '@angular/router'; // Importa RouterModule para manejar routerLink
import { RecuperarComponent } from './recuperar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule para pruebas de HttpClient
import { RecuperarPasswordService } from 'src/app/service/recuperar-password.service'; // Importa el servicio
import { FormsModule } from '@angular/forms'; // Importa FormsModule para usar ngModel

describe('RecuperarComponent', () => {
  let component: RecuperarComponent;
  let fixture: ComponentFixture<RecuperarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperarComponent],
      imports: [RouterModule.forRoot([]), HttpClientTestingModule, FormsModule], // Agrega FormsModule para habilitar ngModel
      providers: [RecuperarPasswordService], // Añade el servicio en los providers
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
