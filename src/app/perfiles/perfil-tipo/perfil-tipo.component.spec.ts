import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilTipoComponent } from './perfil-tipo.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { PerfilesService } from 'src/app/service/perfiles.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PerfilTipoComponent', () => {
  let component: PerfilTipoComponent;
  let fixture: ComponentFixture<PerfilTipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilTipoComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        PerfilesService,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => '1' // Mock paramMap.get to return '1' for tipo
            })
          }
        }
      ]
    });

    fixture = TestBed.createComponent(PerfilTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(PerfilesService).toBeTruthy();
  });
});
