import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreditcardModule } from './creditcard/creditcard.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CreditcardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
