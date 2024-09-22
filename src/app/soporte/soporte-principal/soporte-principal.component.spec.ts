import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SoportePrincipalComponent } from './soporte-principal.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SoportePrincipalComponent', () => {
  let component: SoportePrincipalComponent;
  let fixture: ComponentFixture<SoportePrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoportePrincipalComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(SoportePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
