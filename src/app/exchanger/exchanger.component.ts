import {Component, OnInit} from '@angular/core';
import {FormExchangerService} from '../shared/form-exchanger.service';
import {Currency} from "../shared/Currency";
import {isUndefined} from "util";
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

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
  getValueM = 0;
  currentRate;
  reverseCourse;
  buttonSwitch = false
  getV:any;
  selectedgivValueValut;
  selectedgetValueValut;
  ff;

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
    this.formService.setExchangeB();
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
    this.formService.setExchangeB();
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
    if(!isUndefined(this.givValueM)) {
      if (!isUndefined(this.exchangeRates[rate])) {
        x = this.exchangeRates[rate];
      } else {
        x = 0;
      }
      this.getValueM = money * x;
      this.buttonSwitch = true;
      if (this.getValueM == 0) {
        this.buttonSwitch = false;
      }
    }
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
    this.selectedgivValueValut = this.givNameValut;
    this.selectedgetValueValut = this.getNameValut;
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

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new ExampleDataSource();

}
export interface Element {
  name: string;
  position: number;
  reserv: number;
  symbolUrl: string;
}
const data: Element[] = [
  {position: 1, name: 'ZCash', reserv: 4.16 , symbolUrl: 'https://utbs.ws/images/ZCash.png'},
  {position: 2, name: 'DASH', reserv: 	0.21, symbolUrl: 'https://utbs.ws/images/DASH.png'},
  {position: 3, name: 'Лайткоин', reserv: 	0.01, symbolUrl: 'https://utbs.ws/images/Litecoin.png'},
  {position: 4, name: 'Эфириум', reserv: 9.0122, symbolUrl: 'https://utbs.ws/images/Ethereum.png'},
  {position: 5, name: 'Яндекс.Деньги РУБ', reserv: 10.811, symbolUrl: 'https://utbs.ws/images/YandexMoneyRUB.png'},
  {position: 6, name: 'Сбербанк РУБ', reserv: 12.0107, symbolUrl: 'https://utbs.ws/images/SberbankRUB.png '},
];

export class ExampleDataSource extends DataSource<any> {
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() {}
}

