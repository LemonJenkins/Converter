import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';

import {MatSelectModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatTableModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ExchangerComponent } from './exchanger/exchanger.component';
import { FormSendComponent } from './form-send/form-send.component';
import {Routes, RouterModule} from "@angular/router";

import {FormExchangerService} from "./shared/form-exchanger.service";

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
    FormSendComponent,
  ],
  imports: [
    HttpModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(appRoutes,{ useHash: true }),
  ],
  providers: [FormExchangerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
