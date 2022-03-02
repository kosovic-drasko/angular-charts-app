import {Component, OnInit} from '@angular/core';
import {Chart, ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {ProbaService} from '../proba.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {
  chart: any = [];
  constructor(private serviceProba: ProbaService) {
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
  ];
  ngOnInit(): void {
    this.podaci();
  }
  podaci() {
    this.serviceProba.dailyForecast()
      .subscribe(res => {

        console.log(res);
        // tslint:disable-next-line:no-shadowed-variable
        const region = res.map((res: { region: any; }) => res.region);

        // tslint:disable-next-line:no-shadowed-variable
        const prodaja = res.map((res: { prodaja: any; }) => res.prodaja);

        console.log(region);

        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: region,
            this.chart = new Chart('canvas', {
              type: 'bar',
              data: {
                labels: region,
                datasets: [
                  {
                    data: prodaja,
                    borderColor: '#3cba9f',
                    // fill: true
                  },
                ]
              }
              ,
              options: {

                scales: {
                  xAxes: {
                    display: true
                  },
                  yAxes: {
                    display: true
                  },

                }
              }
            })

          });
      };
      }

