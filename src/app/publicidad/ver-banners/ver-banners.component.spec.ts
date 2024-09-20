import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerBannersComponent } from './ver-banners.component';

describe('VerBannersComponent', () => {
  let component: VerBannersComponent;
  let fixture: ComponentFixture<VerBannersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerBannersComponent]
    });
    fixture = TestBed.createComponent(VerBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
