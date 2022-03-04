import { Component } from '@angular/core'

interface Character {
  name: string
  power: number
}
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
    name: '',
    power: 0
  }

  add() {
    if (this.new.name.trim().length === 0 ){
      return;
    }
    this.characteres.push(this.new);
    this.new = {
      name: '',
      power: 0
    };
    console.log(this.new);
  }


 
}
