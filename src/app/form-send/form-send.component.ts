import {Component, OnInit} from '@angular/core';
import {FormExchangerService} from '../shared/form-exchanger.service';
import {isUndefined} from "util";
import {Currency} from "../shared/Currency";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-form-send',
  templateUrl: './form-send.component.html',
  styleUrls: ['./form-send.component.css']
})
export class FormSendComponent implements OnInit {

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

  constructor(formService: FormExchangerService, private route: ActivatedRoute) {
    this.formService = formService;
  }

  ngOnInit() {
    this.curensys = this.formService.getCurrencies();
    this.exchangeRates = this.formService.getExchangeRates();
    this.route
      .queryParams
      .subscribe(params => {
        this.givNameValut = params['givNameValut'];
        this.getNameValut = params['getNameValut'];
        this.givValueM = params['givValueM'];
        this.getValueM = params['getValueM'];
      });
    this.initField();
  }

  initField() {
    let valut: Currency;
    let a = this.givNameValut;
    let b = this.getNameValut;
    valut = this.curensys.find(function (element) {
      return element.name === a
    });
    this.giveValutImg = valut.img;
    valut = this.curensys.find(function (element) {
      return element.name === b
    });
    this.getValutImg = valut.img;
    this.reservGetValut = valut.reserve;

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

}
