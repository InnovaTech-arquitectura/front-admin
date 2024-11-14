import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GraphsComponent } from './graphs.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DashboardService } from '../../service/dashboard.service';
import { of } from 'rxjs';

describe('GraphsComponent', () => {
  let component: GraphsComponent;
  let fixture: ComponentFixture<GraphsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphsComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule // Agrega HttpClientTestingModule
      ],
      providers: [DashboardService], // Si utilizas DashboardService en GraphsComponent
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(GraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});