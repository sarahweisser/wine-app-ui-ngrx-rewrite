import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State, getIsLoggedIn } from '../home/state';

@Component({
  selector: 'home-shell',
  templateUrl: './home-shell.component.html'
})
export class HomeShellComponent implements OnInit {
  
  isLoggedIn$: Observable<boolean>;
  
  ngOnInit() {
      this.isLoggedIn$ = this.store.select(getIsLoggedIn);
  }
  constructor(private store: Store<State>) { }
  
}