import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FinanzasService } from './finanzas.service';

describe('FinanzasService', () => {
  let service: FinanzasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule] // Mocking HttpClient
    });
    service = TestBed.inject(FinanzasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Add mock tests here if needed
});
