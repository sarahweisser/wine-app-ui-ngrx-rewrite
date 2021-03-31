import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

/* NgRx */
import { Store } from '@ngrx/store';
import { State, getUsers, getError, getCurrentUser } from '../state/index';
import { UserPageActions } from '../state/actions';
import { User } from '../user';
import { HomePageActions } from 'src/app/home/state/actions';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  pageTitle = 'Log In';

  users$: Observable<User[]>;
  errorMessage$: Observable<string>;
  selectedUser$: Observable<User>;

  constructor (
    private userstore: Store<State>,
    private homeStore: Store<State>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.users$ = this.userstore.select(getUsers);
    this.errorMessage$ = this.userstore.select(getError);
    this.userstore.dispatch(UserPageActions.loadUsers());
    this.selectedUser$ = this.userstore.select(getCurrentUser);
  }

  cancel(): void {
    this.router.navigate(['home']);
  }

  checkChanged(): void {
  }

  setCurrentUser() {
    this.userstore.dispatch(UserPageActions.setCurrentUser());
  }

  userWasLoggedIn() {
    this.homeStore.dispatch(HomePageActions.setIsLoggedIn({ isLoggedIn: true }));
    this.setCurrentUser();
    this.router.navigate(['home']);
  }

  login(loginForm: NgForm): void {
    // if (loginForm && loginForm.valid) {
    //   const userName = loginForm.form.value.userName;
    //   const password = loginForm.form.value.password;
    //   this.authService.login(userName, password);
    //   this.router.navigate(['welcome']);

    //}
  }
}
