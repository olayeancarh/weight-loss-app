import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryBarChartComponent } from './history-bar-chart.component';

describe('HistoryBarChartComponent', () => {
  let component: HistoryBarChartComponent;
  let fixture: ComponentFixture<HistoryBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryBarChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
