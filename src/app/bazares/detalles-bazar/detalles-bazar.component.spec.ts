import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DetallesBazarComponent } from './detalles-bazar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('DetallesBazarComponent', () => {
  let component: DetallesBazarComponent;
  let fixture: ComponentFixture<DetallesBazarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesBazarComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(DetallesBazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
