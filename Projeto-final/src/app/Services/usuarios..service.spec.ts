import { TestBed } from '@angular/core/testing';

import { usuarioService } from './usuarios.service';

describe('Service1Service', () => {
  let service: usuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(usuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
