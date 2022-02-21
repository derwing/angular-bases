import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  indexHero: number = 0;
  deletedHero: string = '';
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk']
 
  deleteHero(i: number){
      this.deletedHero = this.heroes[i];
      this.heroes.splice(i, 1);
  }
}
