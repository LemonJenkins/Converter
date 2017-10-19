import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExchangerComponent } from './exchanger/exchanger.component';
import { FormSendComponent } from './form-send/form-send.component';
import {Routes, RouterModule} from "@angular/router";

import {FormExchangerService} from "./shared/form-exchanger.service"

const appRoutes: Routes = [
  {
    path: '',
    component: ExchangerComponent
  },
  {
    path: 'form',
    component: FormSendComponent
  },

];

@NgModule({
  declarations: [
    AppComponent,
    ExchangerComponent,
    FormSendComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [FormExchangerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
