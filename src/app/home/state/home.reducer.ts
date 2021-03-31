import { createReducer, on } from "@ngrx/store";
import { HomePageActions } from "./actions";

// State for this feature (User)
export interface HomeState {
    isLoggedIn: boolean;
}
  
const initialState: HomeState = {
    isLoggedIn: false
};

export const homeReducer = createReducer<HomeState>(
    initialState,
    // TODO
    on(HomePageActions.setIsLoggedIn, (state, action): HomeState => {
        return {
          ...state,
          isLoggedIn: action.isLoggedIn
        };
    })
)