import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../HeroesModule/hero';
import { HeroService } from '../HeroesModule/hero.service';

@Component({
  moduleId: module.id,
  // tslint:disable-next-line:component-selector
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private router: Router,
    private heroSvc: HeroService) {
  }
  ngOnInit(): void {
    this.heroSvc.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  gotoDetail(hero: Hero): void {
    const link = ['/detail', hero.Id];
    this.router.navigate(link);
  }
}
