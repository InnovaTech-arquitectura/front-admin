import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarCuponComponent } from './editar-cupon.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CuponesService } from 'src/app/service/cupones.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';

describe('EditarCuponComponent', () => {
  let component: EditarCuponComponent;
  let fixture: ComponentFixture<EditarCuponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarCuponComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [CuponesService, FormBuilder],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCuponComponent);
    component = fixture.componentInstance;
  
    const formBuilder: FormBuilder = TestBed.inject(FormBuilder);
    component.couponForm = formBuilder.group({
      descripcion: ['', Validators.required],
      descuento: ['', Validators.required],
      plan: ['', Validators.required],
      validez: ['', Validators.required],
      codigo: ['', Validators.required],
      funcionalidad: ['', Validators.required]
    });
  
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
