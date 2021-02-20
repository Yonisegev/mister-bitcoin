import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  ChartErrorEvent,
  ChartMouseLeaveEvent,
  ChartMouseOverEvent,
  ChartSelectionChangedEvent,
  ChartType,
  Column,
  GoogleChartComponent,
} from 'angular-google-charts';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  public charts: {
    title: string;
    type: ChartType;
    data: any[][];
    columns?: Column[];
    options?: {};
  }[] = [];
  subscription: Subscription;
  marketPrice: any = [];
  @ViewChild('chart', { static: true })
  public chart!: GoogleChartComponent;
  constructor(private router: Router, private bitcoinService: BitcoinService) {}
  public onError(error: ChartErrorEvent) {
    console.error('Error: ' + error.message.toString());
  }
  public onSelect(event: ChartSelectionChangedEvent) {
    console.log('Selected: ' + event.toString());
  }
  public onMouseEnter(event: ChartMouseOverEvent) {
    console.log('Hovering ' + event.toString());
  }
  public onMouseLeave(event: ChartMouseLeaveEvent) {
    console.log('No longer hovering ' + event.toString());
  }
  ngOnInit() {
    this.getChartData(
      'market-price',
      'Average BTC price per month',
      'AreaChart',
      ['Month', 'Price']
    );
    this.getChartData(
      'n-transactions',
      'Average transaction per month',
      'BarChart',
      ['Month', 'Price']
    );
  }
  getChartData(api, title, type, columns) {
    this.subscription = this.bitcoinService
      .getChartData(api)
      .subscribe((res) => {
        this.charts.push({
          title,
          type: ChartType[type],
          columns,
          data: res,
        });
      });
  }
}
