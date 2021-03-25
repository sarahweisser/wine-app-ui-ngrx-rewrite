import { createAction, props } from '@ngrx/store';

export const logInUser = createAction(
    '[Home Page] Log In Returning User',
    props<{ isLoggedIn: boolean }>()
  );