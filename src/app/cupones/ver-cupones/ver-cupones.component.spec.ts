import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { VerCuponesComponent } from './ver-cupones.component';

describe('VerCuponesComponent', () => {
  let component: VerCuponesComponent;
  let fixture: ComponentFixture<VerCuponesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerCuponesComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(VerCuponesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
