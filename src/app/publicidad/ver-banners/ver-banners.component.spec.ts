import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerBannersComponent } from './ver-banners.component';
import { HeaderComponent } from 'src/app/componentTools/header/header.component';
import { SidebarComponent } from 'src/app/componentTools/sidebar/sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('VerBannersComponent', () => {
  let component: VerBannersComponent;
  let fixture: ComponentFixture<VerBannersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerBannersComponent, HeaderComponent, SidebarComponent],
      imports:[RouterTestingModule]
    });
    fixture = TestBed.createComponent(VerBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
