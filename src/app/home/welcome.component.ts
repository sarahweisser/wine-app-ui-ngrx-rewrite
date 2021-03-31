import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State, getIsLoggedIn } from '../home/state';
import { getCurrentUser } from '../user/state';
import { User } from '../user/user';

@Component({
    selector: 'welcome',
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle = 'Welcome';
    
    @Input() isLoggedIn: boolean;
    selectedUser$: Observable<User>;

    constructor ( private userstore: Store<State> ) { }

    ngOnInit() {
        this.selectedUser$ = this.userstore.select(getCurrentUser);
    }

}
