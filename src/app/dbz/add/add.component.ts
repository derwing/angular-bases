import { DbzService } from './../services/dbz.service';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {

  @Input('newCharacter') new: Character = {
    name: '',
    power: 0
  }

  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  constructor(private DbzService: DbzService) { }

  ngOnInit(): void {
  }

  add() {

    if (this.new.name.trim().length === 0) { return; }
    // this.onNewCharacter.emit(this.new);

    this.DbzService.addNewCharacter(this.new);

    this.new = {
      name: '',
      power: 0
    };

  }

}
