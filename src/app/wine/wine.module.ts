import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { WineShellComponent } from './wine-shell/wine-shell.component';
import { WineListComponent } from './wine-list/wine-list.component';
// import { WineEditComponent } from './wine-edit/wine-edit.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { wineReducer } from './state/wine.reducer';
import { EffectsModule } from '@ngrx/effects';
import { WineEffects } from './state/wine.effects';

const wineRoutes: Routes = [
  { path: '', component: WineShellComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(wineRoutes),
    StoreModule.forFeature('wines', wineReducer),
    EffectsModule.forFeature([WineEffects])
  ],
  declarations: [
    WineShellComponent,
    WineListComponent,
    // WineEditComponent
  ]
})
export class WineModule { }
