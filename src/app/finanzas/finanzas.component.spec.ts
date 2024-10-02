import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanzasComponent } from './finanzas.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from 'src/app/componentTools/header/header.component';
import { SidebarComponent } from 'src/app/componentTools/sidebar/sidebar.component';
import { BarChartComponent } from '../componentTools/bar-chart/bar-chart.component';
import { PieChartComponent } from '../componentTools/pie-chart/pie-chart.component';
import { LineChartComponent } from '../componentTools/line-chart/line-chart.component';

describe('FinanzasComponent', () => {
  let component: FinanzasComponent;
  let fixture: ComponentFixture<FinanzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinanzasComponent, HeaderComponent, SidebarComponent, BarChartComponent, PieChartComponent, LineChartComponent],
      imports:[RouterTestingModule]
    });
    fixture = TestBed.createComponent(FinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
