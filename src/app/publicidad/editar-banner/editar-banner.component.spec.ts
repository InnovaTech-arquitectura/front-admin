import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditarBannerComponent } from './editar-banner.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { PublicidadService } from 'src/app/service/publicidad.service';

describe('EditarBannerComponent', () => {
  let component: EditarBannerComponent;
  let fixture: ComponentFixture<EditarBannerComponent>;
  let publicidadService: PublicidadService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarBannerComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule // Se importa FormsModule para habilitar ngModel
      ],
      providers: [
        PublicidadService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => '1', // ID de ejemplo para pruebas
              },
            },
          },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Maneja elementos personalizados
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarBannerComponent);
    component = fixture.componentInstance;
    publicidadService = TestBed.inject(PublicidadService);

    spyOn(publicidadService, 'getBannerById').and.returnValue(of({ id: 1, title: 'Banner Title', picture: 'imageData' }));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
