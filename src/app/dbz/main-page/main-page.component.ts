import { Component } from '@angular/core'
import { Character } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  message: string = 'In this section explain the behavior of formsModule & NgModel(two way data binding)';
  characteres: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];

  new: Character = {
    name: 'Maestro Rochi',
    power: 12000
  }


  addNewCharacter(newCharacter: Character) {
    console.log(newCharacter);
    
    this.characteres.push(newCharacter);
  }
 


 
}
