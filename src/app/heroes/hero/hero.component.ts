import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent {
    name: string = 'Ironman';
    age: number = 45;

    constructor(
        private _sanitizer: DomSanitizer
    ) {}

    get capitalizeName(): string {
        return this.name.toUpperCase();
    }

    getName(): string {
        return `${ this.name } - ${ this.age }`;
    }

    changeName(): void {
        this.name = 'Spiderman';
    }

    changeAge(): void {
        this.age = 30;
    }

    // show youtube video in angular
    getVideoIframe(url: string) {
        var video, results;
     
        if (url === null) {
            return '';
        }
        results = url.match('[\\?&]v=([^&#]*)');
        video   = (results === null) ? url : results[1];
     
        return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
    }
    
}