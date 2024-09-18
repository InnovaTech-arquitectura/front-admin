import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilTipoComponent } from './perfil-tipo.component';

describe('PerfilTipoComponent', () => {
  let component: PerfilTipoComponent;
  let fixture: ComponentFixture<PerfilTipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilTipoComponent]
    });
    fixture = TestBed.createComponent(PerfilTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
