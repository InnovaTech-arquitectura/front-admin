import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearBazarComponent } from './crear-bazar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from 'src/app/componentTools/header/header.component';
import { SidebarComponent } from 'src/app/componentTools/sidebar/sidebar.component';
import { EventsService } from 'src/app/service/events.service';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para el uso de ngModel

describe('CrearBazarComponent', () => {
  let component: CrearBazarComponent;
  let fixture: ComponentFixture<CrearBazarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CrearBazarComponent,
        HeaderComponent,
        SidebarComponent 
      ],
      imports: [RouterTestingModule, HttpClientModule, FormsModule], // Añadido FormsModule
      providers: [EventsService]
    });
    fixture = TestBed.createComponent(CrearBazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
