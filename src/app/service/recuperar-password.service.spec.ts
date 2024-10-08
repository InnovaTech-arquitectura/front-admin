import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecuperarPasswordService } from './recuperar-password.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Importa el schema

describe('RecuperarPasswordService', () => {
  let service: RecuperarPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa el módulo de testing de HttpClient
      providers: [RecuperarPasswordService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Incluye el schema
    });
    service = TestBed.inject(RecuperarPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
