import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Wine } from '../wine';

/* NgRx */
import { Store } from '@ngrx/store';
import { State, getCurrentWine, getWines, getError, getShowWineCode } from '../state';

import { WinePageActions } from '../state/actions';

@Component({
  templateUrl: './wine-shell.component.html'
})
export class WineShellComponent implements OnInit {
  displayCode$: Observable<boolean>;
  selectedWine$: Observable<Wine>;
  wines$: Observable<Wine[]>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {

    this.wines$ = this.store.select(getWines);
    this.errorMessage$ = this.store.select(getError);
    this.store.dispatch(WinePageActions.loadWines());
    this.selectedWine$ = this.store.select(getCurrentWine);
    this.displayCode$ = this.store.select(getShowWineCode);
  }

  checkChanged(): void {
    this.store.dispatch(WinePageActions.toggleWineCode());
  }

  newWine(): void {
    this.store.dispatch(WinePageActions.initializeCurrentWine());
  }

  wineSelected(wine: Wine): void {
    this.store.dispatch(WinePageActions.setCurrentWine({ currentWineId: wine.id }));
  }

  deleteWine(wine: Wine): void {
    this.store.dispatch(WinePageActions.deleteWine({ wineId: wine.id }));
  }

  clearWine(): void {
    this.store.dispatch(WinePageActions.clearCurrentWine());
  }
  saveWine(wine: Wine): void {
    this.store.dispatch(WinePageActions.createWine({ wine }));
  }

  updateWine(wine: Wine): void {
    this.store.dispatch(WinePageActions.updateWine({ wine }));
  }
}
