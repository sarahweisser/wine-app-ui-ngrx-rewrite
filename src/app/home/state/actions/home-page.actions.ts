import { createAction, props } from '@ngrx/store';

export const setIsLoggedIn = createAction(
    '[Home Page] Set User Login Status',
    props<{ isLoggedIn: boolean }>()
  );