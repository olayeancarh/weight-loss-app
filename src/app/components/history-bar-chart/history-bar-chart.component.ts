import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType, ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-history-bar-chart',
  templateUrl: './history-bar-chart.component.html',
  styleUrls: ['./history-bar-chart.component.css']
})
export class HistoryBarChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public delayed: any;
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [];
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: false,
    scales: {
       x: {
        ticks: { display: true },
        grid: { display: false, drawTicks: false },
        stacked: true
      },
      y: {
        display: false
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
        data: [4, 10, 3, 5, 9, 2, 1],
        backgroundColor: [
          '#BCB1FF',
          '#7C66FF',
          '#BCB1FF',
          '#BCB1FF',
          '#7C66FF',
          '#BCB1FF',
          '#BCB1FF',
        ],
        borderRadius: 15,
        barThickness: 8,
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

}
