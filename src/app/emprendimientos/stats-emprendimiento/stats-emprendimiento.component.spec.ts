import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StatsEmprendimientoComponent } from './stats-emprendimiento.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('StatsEmprendimientoComponent', () => {
  let component: StatsEmprendimientoComponent;
  let fixture: ComponentFixture<StatsEmprendimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatsEmprendimientoComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(StatsEmprendimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
