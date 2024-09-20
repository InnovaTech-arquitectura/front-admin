import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInfoCapacitacionesComponent } from './ver-info-capacitaciones.component';

describe('VerInfoCapacitacionesComponent', () => {
  let component: VerInfoCapacitacionesComponent;
  let fixture: ComponentFixture<VerInfoCapacitacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerInfoCapacitacionesComponent]
    });
    fixture = TestBed.createComponent(VerInfoCapacitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
