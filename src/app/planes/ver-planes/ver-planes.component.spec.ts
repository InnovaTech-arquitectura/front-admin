import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../../componentTools/header/header.component';
import { SidebarComponent } from '../../componentTools/sidebar/sidebar.component';
import { RouterTestingModule } from '@angular/router/testing'; 
import { HttpClientModule } from '@angular/common/http';
import { VerPlanesComponent } from './ver-planes.component';
import { PlanesService } from 'src/app/service/planes.service';

describe('VerPlanesComponent', () => {
  let component: VerPlanesComponent;
  let fixture: ComponentFixture<VerPlanesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        VerPlanesComponent,
        HeaderComponent, // Añadido aquí
        SidebarComponent // Añadido aquí
      ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [PlanesService]
    });
    fixture = TestBed.createComponent(VerPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
