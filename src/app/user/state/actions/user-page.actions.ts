/* NgRx */
import { createAction } from '@ngrx/store';

export const loadUsers = createAction(
  '[User Page] Load'
);

export const setCurrentUser = createAction(
  '[User Page] Set Current User'
);

