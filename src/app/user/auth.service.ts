import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    currentUser: User | null;
    redirectUrl: string;

    constructor() { }

    isLoggedIn(): boolean {
        if (this.currentUser) {
            return this.currentUser.isLoggedIn;
        }
        return false;
    }

    login(userName: string, password: string): void {
        // Code here would log into a back end service
        // and return user information
        // This is just hard-coded here.
        this.currentUser = {
            id: 1,
            firstName: "FIRST_NAME",
            lastName: "LAST_NAME",
            title: "PREFIX",
            email: "EMAIL",
            isLoggedIn: true
        };
    }

    logout(): void {
        this.currentUser = null;
    }
}