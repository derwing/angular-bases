import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccumulatorComponent } from './accumulator/accumulator.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccumulatorComponent,
    HeroComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
