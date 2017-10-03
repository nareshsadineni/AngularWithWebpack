import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';

import { SignUpComponent } from 'app/ReactiveFormsModule/signUp.component';

const routes: Routes = [
  {
    path: 'signup',
    children: [{ path: '', component: SignUpComponent }]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ChartsModule    
  ],
  exports: [RouterModule],
  declarations: [
    SignUpComponent
  ],
})

export class ReactiveModule {

}
