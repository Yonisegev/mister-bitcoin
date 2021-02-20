import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import Axios from 'axios';
const axios = Axios.create({
  withCredentials: true,
});

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  constructor(private http: HttpClient) {}

  public getRate(coins: number) {
    return this.http.get<{ value: number }>(
      `https://blockchain.info/tobtc?currency=USD&value=${coins}`
    );
  }

  public getConfirmedTransactions() {
    return this.http
      .get<{ values }>(
        `https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true`
      )
      .pipe(map((res) => res.values));
  }

  public getMarketPrice() {
    return this.http.get<{ values }>(
      `https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`
    );
  }

  public getBtcToUsd() {
    return this.http.get(
      `https://api.coindesk.com/v1/bpi/currentprice/CNY.json`
    );
  }

  public getChartData(api) {
    let monthMap = {};
    let data = [];
    return this.http
      .get<{ values }>(
        `https://api.blockchain.info/charts/${api}?timespan=5months&format=json&cors=true`
      )
      .pipe(
        map((res) => {
          monthMap = res.values.reduce((acc, curr) => {
            let month = moment(+`${curr.x}000`).format('MMM YY');
            acc[month] = acc[month]
              ? {
                  total: acc[month].total + curr.y,
                  count: acc[month].count + 1,
                }
              : { total: curr.y, count: 1 };
            return acc;
          }, {});
          Object.keys(monthMap).map((month) => {
            let avg = Math.floor(monthMap[month].total / monthMap[month].count);
            let currMonth = [month, avg];
            data = [...data, currMonth];
          });
          return data;
        })
      );
  }
}
