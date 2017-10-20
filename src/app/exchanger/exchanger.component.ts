import {Component, OnInit} from '@angular/core';
import {FormExchangerService} from '../shared/form-exchanger.service';
import {Currency} from "../shared/Currency";
import {isUndefined} from "util";

@Component({
  selector: 'app-exchanger',
  templateUrl: './exchanger.component.html',
  styleUrls: ['./exchanger.component.css']
})
export class ExchangerComponent implements OnInit {

  formService: FormExchangerService;
  curensys;
  exchangeRates;
  giveValutImg;
  getValutImg;
  reservGetValut;
  givNameValut;
  getNameValut;
  givValueM;
  getValueM;
  currentRate;
  reverseCourse;

  constructor(formService: FormExchangerService) {
    this.formService = formService;
  }

  ngOnInit() {
    this.curensys = this.formService.getCurrencies();
    this.exchangeRates = this.formService.getExchangeRates();
    this.giveValutImg = this.curensys[0].img;
    this.getValutImg = this.curensys[0].img;
    this.reservGetValut = this.curensys[0].reserve;
    this.givNameValut = this.curensys[0].name;
    this.getNameValut = this.curensys[0].name;
    this.updateCourse();
  }

  setGivValut(currency: string) {
    let valut: Currency;
    valut = this.curensys.find(function (element) {
      return element.name === currency
    });
    this.giveValutImg = valut.img;
    this.givNameValut = valut.name;
    this.updateCourse();
    this.getValueMoney(this.givValueM);
  }

  setGetValut(currency: string) {
    let valut: Currency;
    valut = this.curensys.find(function (element) {
      return element.name === currency
    });
    this.getValutImg = valut.img;
    this.getNameValut = valut.name;
    this.reservGetValut = valut.reserve;
    this.updateCourse();
    this.reservGetValut = valut.reserve;
    this.getValueMoney(this.givValueM);
  }

  getValueMoney(money: number) {
    this.givValueM = money;
    let x;
    let rate = this.givNameValut + "_" + this.getNameValut;
    if (!isUndefined(this.exchangeRates[rate])) {
      x = this.exchangeRates[rate];
    } else {
      x = 0;
    }
    this.getValueM = money * x;
  }

  switcher() {
    let a;
    a = this.getNameValut;
    this.getNameValut = this.givNameValut;
    this.givNameValut = a;
    a = this.getValutImg;
    this.getValutImg = this.giveValutImg;
    this.giveValutImg = a;
    a = this.givNameValut;
    this.reservGetValut = this.curensys.find(function (element) {
      return element.name === a;
    }).reserve;
    this.getValueMoney(this.givValueM);
    this.updateCourse();
    (<HTMLInputElement>document.getElementById('getSelect')).value = this.getNameValut;
    (<HTMLInputElement>document.getElementById('givSelect')).value = this.givNameValut;
  }

  updateCourse() {
    let rate = this.givNameValut + "_" + this.getNameValut;
    let reversRate = this.getNameValut + "_" + this.givNameValut;
    if (!isUndefined(this.exchangeRates[rate])) {
      this.currentRate = this.exchangeRates[rate];
    } else {
      this.currentRate = 0;
    }
    if (!isUndefined(this.exchangeRates[reversRate])) {
      this.reverseCourse = this.exchangeRates[rate];
    } else {
      this.reverseCourse = 0;
    }
  }

}
