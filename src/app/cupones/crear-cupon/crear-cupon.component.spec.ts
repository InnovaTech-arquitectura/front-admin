import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CrearCuponComponent } from './crear-cupon.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms'; // Add this to fix the error
import { HttpClientTestingModule } from '@angular/common/http/testing'; // If you're using HTTP services

describe('CrearCuponComponent', () => {
  let component: CrearCuponComponent;
  let fixture: ComponentFixture<CrearCuponComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCuponComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule, // Add this to mock HTTP requests if needed
        FormsModule // Add FormsModule here to enable ngModel
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(CrearCuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
