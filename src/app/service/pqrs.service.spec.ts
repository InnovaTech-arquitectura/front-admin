import { TestBed } from '@angular/core/testing';

import { PqrsService } from './pqrs.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PqrsService', () => {
  let service: PqrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule] 
    });
    service = TestBed.inject(PqrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
