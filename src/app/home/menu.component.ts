import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../user/auth.service';

@Component({
  selector: 'welcome-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  pageTitle = 'WINE APP';

  @Input() isLoggedIn: boolean;

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.firstName;
    }
  }

  constructor ( private router: Router, private authService: AuthService ) { }

  ngOnInit() {
  }

  register() {
    // TODO
    this.router.navigate(['/home']);
  }

  logOut(): void {
    // TODO
    this.router.navigate(['/home']);
  }
}
