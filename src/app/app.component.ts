import { Component } from '@angular/core';

import { HeroService } from './HeroesModule/hero.service';
import { HeroesComponent } from './HeroesModule/heroes.component';
import { HeroDetailComponent } from './HeroesModule/hero-detail.component';
import { Hero } from './HeroesModule/hero';

@Component({
    moduleId: module.id,
    // tslint:disable-next-line:component-selector
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
    title = 'Angular4';
}
