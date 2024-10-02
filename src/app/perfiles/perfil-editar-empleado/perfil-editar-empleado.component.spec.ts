import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PerfilEditarEmpleadoComponent } from './perfil-editar-empleado.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PerfilesService } from 'src/app/service/perfiles.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('PerfilEditarEmpleadoComponent', () => {
  let component: PerfilEditarEmpleadoComponent;
  let fixture: ComponentFixture<PerfilEditarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilEditarEmpleadoComponent],
      imports: [RouterTestingModule, HttpClientModule,HttpClientTestingModule, FormsModule],
      providers: [
        PerfilesService,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => '1'
            })
          }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });
  
  beforeEach(() => {    
    fixture = TestBed.createComponent(PerfilEditarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
