import {Injectable} from '@angular/core';
import {Currency} from "./Currency";
import {ExchangeRateBitcoin} from "./ExchangeRateBitcoinApi";
import {HttpModule, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FormExchangerService {

  private apiUrl = 'https://kuna.io/api/v2/tickers/btcuah';
  exchangeRateBitcoin: ExchangeRateBitcoin;
  private currencies: Currency[] = [
    {
      name: 'Privat24',
      img: '/assets/unnamed.png',
      reserve: 2555
    },
    {
      name: 'Bitcoin',
      img: '/assets/Bitcoin_Logo.png',
      reserve: 2555
    },
    {
      name: 'EUR',
      img: '/assets/CashEUR.png',
      reserve: 3536
    },
    {
      name: 'YandexD',
      img: '/assets/YandexMoneyRUB.png',
      reserve: 6666
    }
  ];

  private exchangeRates: any = {
    Bitcoin_Bitcoin: 1,
    Bitcoin_Privat24: 1,
    Bitcoin_EUR: 50000,
    Bitcoin_YandexD: 80000,
    Privat24_Privat24: 1,
    Privat24_EUR: 0.26,
    Privat24_YandexD: 5,
    Privat24_Bitcoin:1,
    EUR_EUR: 1,
    EUR_Privat24: 26,
    EUR_YandexD: 10,
    EUR_Bitcoin: 0.0001,
    YandexD_YandexD: 1,
    YandexD_Privat24: 0.2,
    YandexD_EUR: 0.01,
    YandexD_Bitcoin: 0.00001,
  };

  constructor(private http: Http) {
    this.getExchangeRateBitcoin();
  }


  getCurrencies() {
    return this.currencies;
  }

  geteexchangeRateBitcoin() {
    return this.exchangeRateBitcoin;
  }


  getExchangeRates() {
    return this.exchangeRates;
  }

  getExchangeRateBitcoin() {
    this.http.get(this.apiUrl)
      .map(res => res.json())
      .subscribe(data => this.exchangeRateBitcoin = data,
        err => console.log(err),
        () => console.log('Completed'));
  }

  setExchangeB() {
    this.exchangeRates.Bitcoin_Privat24 = this.exchangeRateBitcoin.ticker.sell;
    this.exchangeRates.Privat24_Bitcoin = 1/this.exchangeRateBitcoin.ticker.buy;
  }

  }
