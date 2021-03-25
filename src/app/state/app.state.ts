import { HomeState } from '../home/state/home.reducer';
import { UserState } from '../user/state/user.reducer';

// Representation of the entire app state
// Extended by lazy loaded modules
export interface State {
  home: HomeState;
  user: UserState;
}
