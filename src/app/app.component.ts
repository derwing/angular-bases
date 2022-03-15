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

  hideShowExercise(exerciseNumber: Number, showHide: boolean) {
    switch (exerciseNumber) {
      case 1:
        this.exercise1 = showHide;
        break;

      case 2:
        this.exercise2 = showHide;
        break;

      case 3:
        this.exercise3 = showHide;
        break;

      case 4:
        this.exercise4 = showHide;
        break;
      default:
        break;
    }
  }

}

