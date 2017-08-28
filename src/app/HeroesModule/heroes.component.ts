import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  title: string;
  selectedHero: Hero;
  heroes: Hero[];
  heroService: HeroService;

  constructor(private heroSvc: HeroService,
    private router: Router) {
    this.heroService = heroSvc;
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getData(): void {
    this.heroService.getHeroes().subscribe(heroes => { 
      console.log(heroes);
      this.heroes = heroes 
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  add(name: string): void {
    name = name.trim();
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void{
    this.heroService
    .delete(hero.Id)
    .then(() => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) { this.selectedHero = null; }
    });
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.Id]);
  }

  //public getData() {
  //    this.http.get("http://webapiwithazuredatabase20170605114137.azurewebsites.net/api/values/1")
  //        .map(result => JSON.parse(result.json()));
  //}
}