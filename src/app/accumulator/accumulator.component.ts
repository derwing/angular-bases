import {Component} from '@angular/core';

@Component({
    selector: 'app-accumulator',
    templateUrl: 'accumulator.component.html',
})
export class AccumulatorComponent {
    title : string = 'App Component';
    number: number = 0;
    base  : number = 5;
    exerciseCode1: string = `accumulator(value: number): number {return this.number += value;}`
    
  
  
    
    accumulator(value: number): number {
    return this.number += value;
    }
} 