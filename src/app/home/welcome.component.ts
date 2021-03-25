import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State, getIsLoggedIn } from '../home/state';

@Component({
    selector: 'welcome',
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle = 'Welcome';
    
    @Input() isLoggedIn: boolean;

}
