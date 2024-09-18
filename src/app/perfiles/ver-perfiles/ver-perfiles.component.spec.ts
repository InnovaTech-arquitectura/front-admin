import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPerfilesComponent } from './ver-perfiles.component';

describe('VerPerfilesComponent', () => {
  let component: VerPerfilesComponent;
  let fixture: ComponentFixture<VerPerfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerPerfilesComponent]
    });
    fixture = TestBed.createComponent(VerPerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
