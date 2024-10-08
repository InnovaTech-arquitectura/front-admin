import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarCuponComponent } from './editar-cupon.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CuponesService } from 'src/app/service/cupones.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
      providers: [CuponesService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCuponComponent);
    component = fixture.componentInstance;
  
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
