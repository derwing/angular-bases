import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  exercise1: boolean = false;
  exercise2: boolean = false;
  exercise3: boolean = false;
  exercise4: boolean = false;

  hideShowExercise(exerciseNumber: Number) {
    switch (exerciseNumber) {
      case 1:
        this.exercise1 = !this.exercise1;
        break;

      case 2:
        this.exercise2 = !this.exercise2;
        break;

      case 3:
        this.exercise3 = !this.exercise3;
        break;

      case 4:
        this.exercise4 = !this.exercise4;
        break;
      default:
        break;
    }
  }

}

