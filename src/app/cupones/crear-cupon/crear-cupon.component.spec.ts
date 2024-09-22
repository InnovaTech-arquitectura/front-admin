import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CrearCuponComponent } from './crear-cupon.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CrearCuponComponent', () => {
  let component: CrearCuponComponent;
  let fixture: ComponentFixture<CrearCuponComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCuponComponent],
      imports: [RouterTestingModule],
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
