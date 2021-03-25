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
    on(HomePageActions.logInUser, (state): HomeState => {
        return {
          ...state,
          isLoggedIn: true
        };
    })
)