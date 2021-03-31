import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State, getIsLoggedIn } from '../home/state';
import { HomePageActions } from './state/actions';
import { UserPageActions } from '../user/state/actions';

@Component({
  selector: 'home-shell',
  templateUrl: './home-shell.component.html'
})
export class HomeShellComponent implements OnInit {
  
  isLoggedIn$: Observable<boolean>;

  ngOnInit() {
      this.isLoggedIn$ = this.homeStore.select(getIsLoggedIn);
  }

  userLogIn(): void {
    this.homeStore.dispatch(HomePageActions.setIsLoggedIn({ isLoggedIn: true }));
    // TODO Check for user name and pass in users
    // TODO security/encryption of any sensitive data
    // TODO set current user to user that was logged in
    // using mock data for now as placeholder for ui display
    this.userstore.dispatch(UserPageActions.setCurrentUser());
  }

  logUserOut(): void {
    this.homeStore.dispatch(HomePageActions.setIsLoggedIn({ isLoggedIn: false }));
  }

  constructor (
    private userstore: Store<State>,
    private homeStore: Store<State>,
  ) { }
  
}