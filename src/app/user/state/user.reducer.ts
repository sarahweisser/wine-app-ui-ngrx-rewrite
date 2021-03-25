import { User } from '../user';

/* NgRx */
import { createReducer, on } from '@ngrx/store';
import { UserPageActions, UserApiActions } from './actions';

// State for this feature (User)
export interface UserState {
  userIsAdmin: boolean;
  currentUserId: number | null;
  users: User[];
  error: string;
}

const initialState: UserState = {
  userIsAdmin: false,
  currentUserId: 114,
  users: [],
  error: '',
};

export const userReducer = createReducer<UserState>(
  initialState,
  on(UserApiActions.loadUsersSuccess, (state, action): UserState => {
    return {
      ...state,
      users: action.users,
      error: ''
    };
  }),
  on(UserApiActions.loadUsersFailure, (state, action): UserState => {
    return {
      ...state,
      users: [],
      error: action.error
    };
  }),
  on(UserPageActions.loadUsers, (state): UserState => {
    return {
      ...state,
      currentUserId: 0
    };
  })
);