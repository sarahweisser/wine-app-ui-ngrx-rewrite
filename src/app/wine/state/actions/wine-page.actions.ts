import { Wine } from '../../wine';

/* NgRx */
import { createAction, props } from '@ngrx/store';

export const toggleWineCode = createAction(
  '[Wine Page] Toggle Wine Code'
);

export const setCurrentWine = createAction(
  '[Wine Page] Set Current Wine',
  props<{ currentWineId: number }>()
);

export const clearCurrentWine = createAction(
  '[Wine Page] Clear Current Wine'
);

export const initializeCurrentWine = createAction(
  '[Wine Page] Initialize Current Wine'
);

export const loadWines = createAction(
  '[Wine Page] Load'
);

export const updateWine = createAction(
  '[Wine Page] Update Wine',
  props<{ wine: Wine }>()
);

export const createWine = createAction(
  '[Wine Page] Create Wine',
  props<{ wine: Wine }>()
);

export const deleteWine = createAction(
  '[Wine Page] Delete Wine',
  props<{ wineId: number }>()
);
