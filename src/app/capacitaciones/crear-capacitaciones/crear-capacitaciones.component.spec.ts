import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCapacitacionesComponent } from './crear-capacitaciones.component';

describe('CrearCapacitacionesComponent', () => {
  let component: CrearCapacitacionesComponent;
  let fixture: ComponentFixture<CrearCapacitacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCapacitacionesComponent]
    });
    fixture = TestBed.createComponent(CrearCapacitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
