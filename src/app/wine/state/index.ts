import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.state';
import { WineState } from './wine.reducer';

// Extends the app state to include the product feature.
// This is required because products are lazy loaded.
// So the reference to ProductState cannot be added to app.state.ts directly.
export interface State extends AppState.State {
    wines: WineState;
}

// Selector functions
const getWineFeatureState = createFeatureSelector<WineState>('wines');

export const getShowWineCode = createSelector(
    getWineFeatureState,
    state => state.showWineCode
);

export const getCurrentWineId = createSelector(
    getWineFeatureState,
    state => state.currentWineId
);

export const getCurrentWine = createSelector(
    getWineFeatureState,
    getCurrentWineId,
    (state, currentWineId) => {
        if (currentWineId === 0) {
            return {
                id: 0,
                wineryName: '',
                wineName: '',
                vintage: null,
                varietals: [],
                starRating: 0
            };
        } else {
            return currentWineId ? state.wines.find(p => p.id === currentWineId) : null;
        }
    }
);

export const getWines = createSelector(
    getWineFeatureState,
    state => state.wines
);

export const getError = createSelector(
    getWineFeatureState,
    state => state.error
);
