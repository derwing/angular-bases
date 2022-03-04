import { Component, OnInit, Input } from '@angular/core';

interface Character {
  name: string
  power: number
}

@Component({
  selector: 'app-characteres',
  templateUrl: './characteres.component.html'
})
export class CharacteresComponent  {
  @Input() characteres: any = [];

}
