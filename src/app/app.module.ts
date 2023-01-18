import { SharedModule } from './shared/shared.module';
import { DbzModule } from './dbz/dbz.module';
import { AccumulatorModule } from './accumulators/accumulator.module';
import { HeroesModule } from './heroes/heroes.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HeroesModule,
    AccumulatorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
