import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
    selector: 'app-verify-user',
    templateUrl: './verify-user.component.html',
    styleUrls: ['./verify-user.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class VerifyUserComponent {
    pageTitle = 'Login to exisiting account';

    @Input() errorMessage: string;
    @Input() users: User[];
    @Input() selectedUser: User;
    @Output() initializeNewUser = new EventEmitter<void>();
    @Output() userWasLoggedIn = new EventEmitter<User>();

    constructor(private router: Router) { }

    cancel(): void {
      this.router.navigate(['home']);
    }

    login(): void {
      this.userWasLoggedIn.emit();
    }

  }