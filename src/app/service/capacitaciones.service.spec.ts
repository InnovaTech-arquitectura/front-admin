import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Añadir si el servicio usa HttpClient
import { CapacitacionesService } from './capacitaciones.service';

describe('CapacitacionesService', () => {
  let service: CapacitacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule] // Añadir para las peticiones HTTP
    });
    service = TestBed.inject(CapacitacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
