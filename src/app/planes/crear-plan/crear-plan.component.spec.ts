import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';  // Import RouterTestingModule

import { CrearPlanComponent } from './crear-plan.component';

describe('CrearPlanComponent', () => {
  let component: CrearPlanComponent;
  let fixture: ComponentFixture<CrearPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearPlanComponent],
      imports: [RouterTestingModule],  // Add RouterTestingModule here
      schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Already added for custom elements
    });
    fixture = TestBed.createComponent(CrearPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
