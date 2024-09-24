import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';  // Import RouterTestingModule

import { CrearPlanComponent } from './crear-plan.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanesService } from 'src/app/service/planes.service';
import { FormsModule } from '@angular/forms';

describe('CrearPlanComponent', () => {
  let component: CrearPlanComponent;
  let fixture: ComponentFixture<CrearPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearPlanComponent],
      imports: [RouterTestingModule, HttpClientModule, FormsModule],  // Add RouterTestingModule here
      providers: [PlanesService],
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
