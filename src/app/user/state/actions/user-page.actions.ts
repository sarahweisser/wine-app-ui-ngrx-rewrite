/* NgRx */
import { createAction } from '@ngrx/store';

export const loadUsers = createAction(
  '[User Page] Load'
);

export const initializeReturningUser = createAction(
  '[User Page] Initialize Returning User'
);

