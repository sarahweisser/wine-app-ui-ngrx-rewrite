import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { WineService } from '../wine.service';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  WinePageActions, WineApiActions } from './actions';

@Injectable()
export class WineEffects {

  constructor(private actions$: Actions, private wineService: WineService) { }

  loadWines$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(WinePageActions.loadWines),
        mergeMap(() => this.wineService.getWines()
          .pipe(
            map(wines => WineApiActions.loadWinesSuccess({ wines })),
            catchError(error => of(WineApiActions.loadWinesFailure({ error })))
          )
        )
      );
  });

  updateWine$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(WinePageActions.updateWine),
        concatMap(action =>
          this.wineService.updateWine(action.wine)
            .pipe(
              map(wine => WineApiActions.updateWineSuccess({ wine })),
              catchError(error => of(WineApiActions.updateWineFailure({ error })))
            )
        )
      );
  });

  createWine$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(WinePageActions.createWine),
        concatMap(action =>
          this.wineService.createWine(action.wine)
            .pipe(
              map(wine => WineApiActions.createWineSuccess({ wine })),
              catchError(error => of(WineApiActions.createWineFailure({ error })))
            )
        )
      );
  });

  deleteWine$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(WinePageActions.deleteWine),
        mergeMap(action =>
          this.wineService.deleteWine(action.wineId).pipe(
            map(() => WineApiActions.deleteWineSuccess({wineId: action.wineId })),
            catchError(error => of(WineApiActions.deleteWineFailure({ error })))
          )
        )
      );
  });
}
