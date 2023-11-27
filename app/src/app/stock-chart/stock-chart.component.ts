import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
// import { Color } from 'ng2-charts';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css'],
})
export class StockChartComponent implements OnInit {
  ticker: string = '';
  chartData: any = [{ data: [], label: 'Stock Price' }];
  chartLabels: string[] = [];
  chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: { type: 'time', time: { unit: 'day' } },
      y: { }
    }
  };
  chartType: ChartType = 'line';
  chartLegend = true;
  chartPlugins = [];
  chartColors: any[] = [
    {
      borderColor: 'rgba(77,83,96,1)',
      backgroundColor: 'rgba(77,83,96,0.2)',
    },
  ];

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.fetchStockData();
  }

  fetchStockData() {
    this.stockService.getStockData(this.ticker).subscribe(
      (data: any) => {
        // Assuming the API returns an array of objects with 'date' and 'price' properties
        this.chartData[0].data = data.map((item: any) => ({ x: new Date(item.date), y: item.price }));
        this.chartLabels = data.map((item: any) => item.date);
      },
      error => {
        console.error('Error fetching stock data:', error);
      }
    );
  }
}
