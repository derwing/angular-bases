
import { Component } from '@angular/core'
import { Character } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {


  message: string = 'In this section explain the behavior of formsModule & NgModel(two way data binding) and the information is provided using an angular service';
  new: Character = {
    name: 'Maestro Rochi',
    power: 12000
  }

  constructor() {
  }





}
