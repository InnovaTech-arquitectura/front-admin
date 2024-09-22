import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponderPreguntaComponent } from './responder-pregunta.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ResponderPreguntaComponent', () => {
  let component: ResponderPreguntaComponent;
  let fixture: ComponentFixture<ResponderPreguntaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponderPreguntaComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(ResponderPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
