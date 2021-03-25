import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.state';
import { HomeState } from './home.reducer';

export interface State extends AppState.State {
    home: HomeState;
}
// Selector functions
const getHomeFeatureState = createFeatureSelector<HomeState>('home');

export const getIsLoggedIn = createSelector(
    getHomeFeatureState,
    state => state.isLoggedIn
);
