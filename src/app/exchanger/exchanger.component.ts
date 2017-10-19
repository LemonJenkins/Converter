import {Component, OnInit} from '@angular/core';
import {FormExchangerService} from '../shared/form-exchanger.service';
import {Currency} from "../shared/Currency";

@Component({
  selector: 'app-exchanger',
  templateUrl: './exchanger.component.html',
  styleUrls: ['./exchanger.component.css']
})
export class ExchangerComponent implements OnInit {

  formService: FormExchangerService;
  curensys: Currency[];

  constructor(formService: FormExchangerService) {
    this.formService = formService;
  }

  ngOnInit() {
    this.curensys = this.formService.getCurrencys();
    console.log(this.curensys);
  }

}
