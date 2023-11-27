import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgChartsModule} from "ng2-charts";
import {RouterOutlet} from "@angular/router";
import {StockChartComponent} from "./stock-chart/stock-chart.component";
@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, HttpClientModule, NgChartsModule, RouterOutlet],
  // providers:    [ Logger ],
  declarations: [ AppComponent, StockChartComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
