import { Character } from './../interfaces/dbz.interfaces';
import { Injectable } from '@angular/core';


@Injectable()
export class DbzService {
    private _characteres: Character[] = [
        {
            name: 'Goku',
            power: 15000
        },
        {
            name: 'Vegeta',
            power: 7500
        }
    ];

    get characteres(): Character[] {
        return [...this._characteres];
    }

    constructor() {
        console.log('started service');
    }

    addNewCharacter(newCharacter: Character) {
        console.log(newCharacter);
        this._characteres.push(newCharacter);
    }
}