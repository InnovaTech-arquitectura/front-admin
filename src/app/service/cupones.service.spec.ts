import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CuponesService } from './cupones.service';

describe('CuponesService', () => {
  let service: CuponesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule] 
    });
    service = TestBed.inject(CuponesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
