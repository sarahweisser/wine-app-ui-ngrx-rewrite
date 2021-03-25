import { Wine } from '../../wine';

/* NgRx */
import { createAction, props } from '@ngrx/store';

export const loadWinesSuccess = createAction(
  '[Wine API] Load Success',
  props<{ wines: Wine[] }>()
);

export const loadWinesFailure = createAction(
  '[Wine API] Load Fail',
  props<{ error: string }>()
);

export const updateWineSuccess = createAction(
  '[Wine API] Update Wine Success',
  props<{ wine: Wine }>()
);

export const updateWineFailure = createAction(
  '[Wine API] Update Wine Fail',
  props<{ error: string }>()
);

export const createWineSuccess = createAction(
  '[Wine API] Create Wine Success',
  props<{ wine: Wine }>()
);

export const createWineFailure = createAction(
  '[Wine API] Create Wine Fail',
  props<{ error: string }>()
);

export const deleteWineSuccess = createAction(
  '[Wine API] Delete Wine Success',
  props<{ wineId: number }>()
);

export const deleteWineFailure = createAction(
  '[Wine API] Delete Wine Fail',
  props<{ error: string }>()
);
