import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Hero } from './hero';
import { Observable } from 'rxjs/Observable';

// let heroesPromise = Promise.resolve(Heroes);

@Injectable()
export class HeroService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    // private heroesUrl = 'api/heroes';  // URL to web api
    private heroesUrl = 'http://heroesapi2.azurewebsites.net/api/values';

    constructor(private http: Http) { }

    getHeroes(): Observable<Hero[]> {
        return this.http.get(this.heroesUrl).map(x => x.json() as Hero[]);
    }

    getHeroesSlowly(): Observable<Hero[]> {
        return new Observable(resolve => {
            setTimeout(() => this.getHeroes().subscribe(), 2000);
        });
    }

    getHero(Id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${Id}`;
        return this.http.get(url).toPromise().then(response => response.json() as Hero);
            // .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.Id}`;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Hero)
            .catch(this.handleError);
    }

    delete(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
