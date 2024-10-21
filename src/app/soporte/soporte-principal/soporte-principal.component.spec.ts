import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SoportePrincipalComponent } from './soporte-principal.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PqrsService } from 'src/app/service/pqrs.service';

describe('SoportePrincipalComponent', () => {
  let component: SoportePrincipalComponent;
  let fixture: ComponentFixture<SoportePrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoportePrincipalComponent],
      imports: [RouterTestingModule, HttpClientModule, FormsModule],
      providers: [PqrsService],
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
