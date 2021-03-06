import { DbzService } from './../services/dbz.service';
import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';



@Component({
  selector: 'app-characteres',
  templateUrl: './characteres.component.html'
})
export class CharacteresComponent {
  // @Input('characterData') characteres: Character[] = [];
  get characteres() {
    return this.dbzService.characteres;
  }

  constructor(private dbzService: DbzService) {

  }

}
