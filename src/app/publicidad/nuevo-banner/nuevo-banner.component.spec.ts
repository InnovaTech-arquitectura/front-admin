import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoBannerComponent } from './nuevo-banner.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from 'src/app/componentTools/header/header.component';
import { SidebarComponent } from 'src/app/componentTools/sidebar/sidebar.component';

describe('NuevoBannerComponent', () => {
  let component: NuevoBannerComponent;
  let fixture: ComponentFixture<NuevoBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoBannerComponent, HeaderComponent, SidebarComponent],
      imports:[RouterTestingModule]
    });
    fixture = TestBed.createComponent(NuevoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
