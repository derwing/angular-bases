import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExplainAccordionComponent } from './explain-accordion/explain-accordion.component';



@NgModule({
  declarations: [
    ExplainAccordionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExplainAccordionComponent
  ]
})
export class SharedModule { }
