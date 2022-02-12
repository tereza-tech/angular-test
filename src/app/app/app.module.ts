import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from '../header/header.module';
import { IntroModule } from '../intro/intro.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    IntroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
