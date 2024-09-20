import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCapacitacionesComponent } from './ver-capacitaciones.component';

describe('VerCapacitacionesComponent', () => {
  let component: VerCapacitacionesComponent;
  let fixture: ComponentFixture<VerCapacitacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerCapacitacionesComponent]
    });
    fixture = TestBed.createComponent(VerCapacitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
