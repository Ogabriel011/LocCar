import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderClientesComponent } from './header-clientes.component';

describe('HeaderClientesComponent', () => {
  let component: HeaderClientesComponent;
  let fixture: ComponentFixture<HeaderClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
