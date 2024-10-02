import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioSesionComponent } from './inicio-sesion.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { FormsModule } from '@angular/forms';

describe('InicioSesionComponent', () => {
  let component: InicioSesionComponent;
  let fixture: ComponentFixture<InicioSesionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioSesionComponent],
      imports: [RouterTestingModule, HttpClientModule, FormsModule], // Cambia NgModel por FormsModule
      providers: [AuthService]
    });
    fixture = TestBed.createComponent(InicioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
