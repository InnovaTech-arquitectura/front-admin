import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEmprendimeintosComponent } from './ver-emprendimeintos.component';

describe('VerEmprendimeintosComponent', () => {
  let component: VerEmprendimeintosComponent;
  let fixture: ComponentFixture<VerEmprendimeintosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerEmprendimeintosComponent]
    });
    fixture = TestBed.createComponent(VerEmprendimeintosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
