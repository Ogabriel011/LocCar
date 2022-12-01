import { TestBed } from '@angular/core/testing';

import { TipoCarroService } from './tipo-carro.service';

describe('TipoCarroService', () => {
  let service: TipoCarroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoCarroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
