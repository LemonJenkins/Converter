import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExchangerComponent } from './exchanger/exchanger.component';
import { FormSendComponent } from './form-send/form-send.component';
import {Routes, RouterModule} from "@angular/router";

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
