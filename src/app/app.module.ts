import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccumulatorComponent } from './accumulator/accumulator.component';
import { HeroComponent } from './heroes/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    AccumulatorComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
