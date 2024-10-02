import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlanesService } from './planes.service';

describe('PlanesService', () => {
  let service: PlanesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule] 
    });
    service = TestBed.inject(PlanesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
