import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';  // Import RouterTestingModule

import { VerPerfilesComponent } from './ver-perfiles.component';

describe('VerPerfilesComponent', () => {
  let component: VerPerfilesComponent;
  let fixture: ComponentFixture<VerPerfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerPerfilesComponent],
      imports: [RouterTestingModule],  // Add RouterTestingModule here
      schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Add CUSTOM_ELEMENTS_SCHEMA here
    });
    fixture = TestBed.createComponent(VerPerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
