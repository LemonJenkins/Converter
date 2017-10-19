import { Injectable } from '@angular/core';
import {Currency} from "./Currency";

@Injectable()
export class FormExchangerService {

  constructor() { }


  private _currencys : Currency[] =[
    {
      name:"YandexMoneyRUB",
      purchaseY:1,
      purchaseP:2.3,
      purchaseE:3.4,
      sale:1,
      reserve:221
    },
    {
      name:"EUR",
      purchaseY:15,
      purchaseP:26,
      purchaseE:1,
      sale:1,
      reserve:548
    },
    {
      name:"Privat24",
      purchaseY:0.3,
      purchaseP:1,
      purchaseE:0.5,
      sale:1,
      reserve:247
    },
  ]


  getCurrencys(): Currency[] {
    return this._currencys;
  }

}
