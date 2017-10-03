import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './HeroesModule/hero-detail.component';
import { HeroesComponent } from './HeroesModule/heroes.component';
import { PageNotFoundComponent } from './PageNotFoundModule/app.not-found.component';
import { CrisisComponent } from './CrisisCenterModule/app.crisis.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { HeroService } from './HeroesModule/hero.service';
import { ReactiveModule } from 'app/ReactiveFormsModule/reactiveFormsModule';

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisComponent },
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent, data: { title: 'Heroes List' } },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
