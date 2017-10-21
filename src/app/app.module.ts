import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HashLocationStrategy} from "@angular/common";

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
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes,{ useHash: true }),
  ],
  providers: [FormExchangerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
