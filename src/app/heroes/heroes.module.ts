import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { HeroComponent } from './hero/hero.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule ({
    declarations: [
        HeroComponent,
        ListComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        HeroComponent,
        ListComponent
    ]
})
export class HeroesModule {}