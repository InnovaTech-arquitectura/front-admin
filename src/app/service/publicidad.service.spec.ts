import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from 'src/app/componentTools/header/header.component';
import { SidebarComponent } from 'src/app/componentTools/sidebar/sidebar.component';
import { EventsService } from 'src/app/service/events.service'; 
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NuevoBannerComponent } from '../publicidad/nuevo-banner/nuevo-banner.component';


describe('CrearBazarComponent', () => {
  let component: NuevoBannerComponent;
  let fixture: ComponentFixture< NuevoBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NuevoBannerComponent,
        HeaderComponent,
        SidebarComponent 
      ],
      imports: [RouterTestingModule, HttpClientModule, FormsModule],
      providers: [EventsService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(NuevoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});