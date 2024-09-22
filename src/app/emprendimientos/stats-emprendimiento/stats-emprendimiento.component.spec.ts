import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsEmprendimientoComponent } from './stats-emprendimiento.component';

describe('StatsEmprendimientoComponent', () => {
  let component: StatsEmprendimientoComponent;
  let fixture: ComponentFixture<StatsEmprendimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatsEmprendimientoComponent]
    });
    fixture = TestBed.createComponent(StatsEmprendimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
