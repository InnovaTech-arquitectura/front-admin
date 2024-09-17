import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../../componentTools/header/header.component';
import { SidebarComponent } from '../../componentTools/sidebar/sidebar.component';
import { VerPlanesComponent } from './ver-planes.component';

describe('VerPlanesComponent', () => {
  let component: VerPlanesComponent;
  let fixture: ComponentFixture<VerPlanesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        VerPlanesComponent,
        HeaderComponent, // Añadido aquí
        SidebarComponent // Añadido aquí
      ]
    });
    fixture = TestBed.createComponent(VerPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
