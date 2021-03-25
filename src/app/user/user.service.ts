import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../user/user';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

// TODO integrate with REST API once 
// model attributes are finalized

@Injectable({
    providedIn: 'root',
})
export class UserService {

    private userUrl = '/server/api/v1/users';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.userUrl)
            .pipe(
                tap(data => console.log(JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    private handleError(err: any) {
        // TODO error handling
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
    }
}
