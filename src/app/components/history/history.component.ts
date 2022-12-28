import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  constructor() {}

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [2, 3, 2, 3, 3, 4, 3],
        borderColor: '#C5FD4F',
        borderWidth: 1,
        pointBackgroundColor: '#7C66FF'
      },
    ],
    labels: ['m', 't', 'w', 't', 'f', 's', 's',],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    scales: {
      y: {
        display: false,
        min: 1
      },
      x: {
        ticks: { display: true },
        grid: { display: false, drawTicks: false },
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  ngOnInit(): void {}
}
