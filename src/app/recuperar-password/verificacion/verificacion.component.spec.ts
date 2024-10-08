import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Importa CUSTOM_ELEMENTS_SCHEMA
import { RouterModule } from '@angular/router'; // Importa RouterModule para manejar routerLink
import { VerificacionComponent } from './verificacion.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule para pruebas de HttpClient
import { RecuperarPasswordService } from 'src/app/service/recuperar-password.service'; // Importa el servicio
import { FormsModule } from '@angular/forms'; // Importa FormsModule para manejar ngModel

describe('VerificacionComponent', () => {
  let component: VerificacionComponent;
  let fixture: ComponentFixture<VerificacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerificacionComponent],
      imports: [RouterModule.forRoot([]), HttpClientTestingModule, FormsModule], // Agrega FormsModule
      providers: [RecuperarPasswordService], // Añade el servicio RecuperarPasswordService como proveedor
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Usa CUSTOM_ELEMENTS_SCHEMA si es necesario
    });
    fixture = TestBed.createComponent(VerificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
