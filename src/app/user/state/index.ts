import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.state';
import { UserState } from './user.reducer';

// Extends the app state to include the product feature.
// This is required because products are lazy loaded.
// So the reference to ProductState cannot be added to app.state.ts directly.
export interface State extends AppState.State {
    users: UserState;
}

// Selector functions
const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getCurrentUserId = createSelector(
    getUserFeatureState,
    state => state.currentUserId
);

export const getCurrentUser = createSelector(
    getUserFeatureState,
    getCurrentUserId,
    (state, currentUserId) => {
        if (currentUserId === 0) {
            return {
                id: 1,
                firstName: "FIRST_NAME_INDEX",
                lastName: "LAST_NAME_INDEX",
                namePrefix: "PREFIX_INDEX",
                email: "EMAIL_INDEX",
                isLoggedIn: false
            };
        } else {
            return currentUserId ? state.users.find(u => u.id === currentUserId) : null;
        }
    }
);

export const getUsers = createSelector(

    getUserFeatureState,
    state => state.users
);

export const getError = createSelector(
    getUserFeatureState,
    state => state.error
);
