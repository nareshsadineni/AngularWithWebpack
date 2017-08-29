import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './HeroesModule/hero-detail.component';
import { HeroesComponent } from './HeroesModule/heroes.component';
import { HeroSearchComponent } from './HeroesModule/hero-search.compnent';
import { PageNotFoundComponent } from './PageNotFoundModule/app.not-found.component';
import { CrisisComponent } from './CrisisCenterModule/app.crisis.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { HeroService } from './HeroesModule/hero.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        ChartsModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent,
        PageNotFoundComponent,
        CrisisComponent,
        DashboardComponent
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule { }
