import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VerEmprendimeintosComponent } from './ver-emprendimeintos.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('VerEmprendimeintosComponent', () => {
  let component: VerEmprendimeintosComponent;
  let fixture: ComponentFixture<VerEmprendimeintosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerEmprendimeintosComponent],
      imports: [RouterTestingModule, HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(VerEmprendimeintosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
