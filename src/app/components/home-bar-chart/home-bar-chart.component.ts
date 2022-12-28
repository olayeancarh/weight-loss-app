import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-home-bar-chart',
  templateUrl: './home-bar-chart.component.html',
  styleUrls: ['./home-bar-chart.component.css'],
})
export class HomeBarChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public delayed: any;
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [];
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {
        ticks: { color: '#fff', font: { size: 10 } },
        grid: { display: false },
      },
      y: {
        min: 2,
        ticks: { color: '#fff', font: { size: 8, weight: '13' } },
        grid: { display: false },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false
      }
    },
    animation: {
      onComplete: () => { this.delayed = true; },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !this.delayed) {
          delay = context.dataIndex * 100 + context.datasetIndex * 50;
        }
        return delay;
      },
    },
  };
  public barChartData: ChartData<'bar'> = {
    labels: ['t', 'w', 't', 'f', 's', 's', 'm'],
    datasets: [
      {
        data: [11, 10, 5, 8, 9, 4, 6],
        backgroundColor: [
          '#C6FD51',
          '#C6FD51',
          '#BFB2FF',
          '#BFB2FF',
          '#C6FD51',
          '#BFB2FF',
          '#BFB2FF',
        ],
        borderRadius: 15,
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
