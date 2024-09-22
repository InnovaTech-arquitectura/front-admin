import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EditarCuponComponent } from './editar-cupon.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditarCuponComponent', () => {
  let component: EditarCuponComponent;
  let fixture: ComponentFixture<EditarCuponComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarCuponComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(EditarCuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
