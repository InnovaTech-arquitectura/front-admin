import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EditarBazarComponent } from './editar-bazar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('EditarBazarComponent', () => {
  let component: EditarBazarComponent;
  let fixture: ComponentFixture<EditarBazarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarBazarComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(EditarBazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
