import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getCurrentUser, State } from '../user/state';
import { User } from '../user/user';
import { HomePageActions } from './state/actions';

@Component({
  selector: 'welcome-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  pageTitle = 'WINE APP';
  selectedUser$: Observable<User>;

  @Input() isLoggedIn: boolean;
  @Output() logUserOut = new EventEmitter<void>();

  constructor ( private router: Router,
                private userstore: Store<State>,
                private homeStore: Store<State>) { }

  ngOnInit() {
    this.selectedUser$ = this.userstore.select(getCurrentUser);
  }

  register() {
    // TODO
    this.router.navigate(['/home']);
  }

  logOut(): void {
    this.homeStore.dispatch(HomePageActions.setIsLoggedIn({ isLoggedIn: false }));
    this.router.navigate(['/home']);
  }
}
