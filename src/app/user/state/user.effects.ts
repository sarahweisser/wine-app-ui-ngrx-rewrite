import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from '../user.service';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserPageActions, UserApiActions } from './actions';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserService) { }

  loadUsers$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(UserPageActions.loadUsers),
        mergeMap(() => this.userService.getUsers()
          .pipe(
            tap(users => console.log()),
            map(users => UserApiActions.loadUsersSuccess({ users })),
            catchError(error => of(UserApiActions.loadUsersFailure({ error })))
          )
        )
      );
  });
}