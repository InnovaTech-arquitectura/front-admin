import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponderPreguntaComponent } from './responder-pregunta.component';

describe('ResponderPreguntaComponent', () => {
  let component: ResponderPreguntaComponent;
  let fixture: ComponentFixture<ResponderPreguntaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponderPreguntaComponent]
    });
    fixture = TestBed.createComponent(ResponderPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
