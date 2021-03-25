import { Wine } from '../wine';

/* NgRx */
import { createReducer, on } from '@ngrx/store';
import { WinePageActions, WineApiActions } from './actions';

// State for this feature (Product)
export interface WineState {
  showWineCode: boolean;
  currentWineId: number | null;
  wines: Wine[];
  error: string;
}

const initialState: WineState = {
  showWineCode: true,
  currentWineId: null,
  wines: [],
  error: ''
};

export const wineReducer = createReducer<WineState>(
  initialState,
  on(WinePageActions.setCurrentWine, (state, action): WineState => {
    return {
      ...state,
      currentWineId: action.currentWineId
    };
  }),
  on(WinePageActions.clearCurrentWine, (state): WineState => {
    return {
      ...state,
      currentWineId: null
    };
  }),
  on(WinePageActions.initializeCurrentWine, (state): WineState => {
    return {
      ...state,
      currentWineId: 0
    };
  }),
  on(WineApiActions.loadWinesSuccess, (state, action): WineState => {
    return {
      ...state,
      wines: action.wines,
      error: ''
    };
  }),
  on(WineApiActions.loadWinesFailure, (state, action): WineState => {
    return {
      ...state,
      wines: [],
      error: action.error
    };
  }),
  on(WineApiActions.updateWineSuccess, (state, action): WineState => {
    const updatedWines = state.wines.map(
      item => action.wine.id === item.id ? action.wine : item);
    return {
      ...state,
      wines: updatedWines,
      currentWineId: action.wine.id,
      error: ''
    };
  }),
  on(WineApiActions.updateWineFailure, (state, action): WineState => {
    return {
      ...state,
      error: action.error
    };
  }),
  // After a create, the currentProduct is the new product.
  on(WineApiActions.createWineSuccess, (state, action): WineState => {
    return {
      ...state,
      wines: [...state.wines, action.wine],
      currentWineId: action.wine.id,
      error: ''
    };
  }),
  on(WineApiActions.createWineFailure, (state, action): WineState => {
    return {
      ...state,
      error: action.error
    };
  }),
  // After a delete, the currentProduct is null.
  on(WineApiActions.deleteWineSuccess, (state, action): WineState => {
    return {
      ...state,
      wines: state.wines.filter(wine => wine.id !== action.wineId),
      currentWineId: null,
      error: ''
    };
  }),
  on(WineApiActions.deleteWineFailure, (state, action): WineState => {
    return {
      ...state,
      error: action.error
    };
  })
);

