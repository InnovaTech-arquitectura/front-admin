import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBannerComponent } from './editar-banner.component';

describe('EditarBannerComponent', () => {
  let component: EditarBannerComponent;
  let fixture: ComponentFixture<EditarBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarBannerComponent]
    });
    fixture = TestBed.createComponent(EditarBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
