import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Asegúrate de importar este módulo
import { EmprendimientosService } from './emprendimientos.service';

describe('EmprendimientosService', () => {
  let service: EmprendimientosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  
      providers: [EmprendimientosService]  
    });
    service = TestBed.inject(EmprendimientosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
