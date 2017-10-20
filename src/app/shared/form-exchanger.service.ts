import {Injectable} from '@angular/core';
import {Currency} from "./Currency";

@Injectable()
export class FormExchangerService {

  constructor() {
  }



  private currencies: Currency[] = [
    {
      name: 'Privat24',
      img: '/assets/unnamed.png',
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
    Privat24_Privat24: 1,
    EUR_EUR: 1,
    YandexD_YandexD: 1,
    Privat24_EUR: 0.26,
    Privat24_YandexD: 5,
    EUR_Privat24: 26,
    EUR_YandexD: 10,
    YandexD_Privat24: 0.2,
    YandexD_EUR: 0.01,

  };


  getCurrencies() {
    return this.currencies;
  }


  getExchangeRates() {
    return this.exchangeRates;
  }
}
