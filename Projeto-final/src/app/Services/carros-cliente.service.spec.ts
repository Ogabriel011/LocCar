import { TestBed } from '@angular/core/testing';

import { CarrosService } from './carros-cliente.service';

describe('CarrosService', () => {
  let service: CarrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
