import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { CharacteresComponent } from './characteres/characteres.component';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [
    MainPageComponent,
    CharacteresComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
    MainPageComponent,
    CharacteresComponent
  ]
})
export class DbzModule { }
