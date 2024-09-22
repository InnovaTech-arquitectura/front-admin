import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CrearBazarComponent } from './crear-bazar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CrearBazarComponent', () => {
  let component: CrearBazarComponent;
  let fixture: ComponentFixture<CrearBazarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearBazarComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(CrearBazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
