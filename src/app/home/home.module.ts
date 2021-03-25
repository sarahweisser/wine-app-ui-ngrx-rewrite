import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { HomeShellComponent } from './home-shell.component';
import { MenuComponent } from './menu.component';
import { WelcomeComponent } from './welcome.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { homeReducer } from './state/home.reducer';


const homeRoutes: Routes = [
  { path: '', component: HomeShellComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(homeRoutes),
    StoreModule.forFeature('home', homeReducer)
  ],
  declarations: [
    HomeShellComponent,
    MenuComponent,
    WelcomeComponent
  ]
})
export class HomeModule { }