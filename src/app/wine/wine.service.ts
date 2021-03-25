import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Wine } from './wine';

// TODO integrate with REST API once 
// model attributes are finalized

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class WineService {

  // TODO integrate with REST API once model is set
  private wineUrl = '/server/api/v1/wines';

  constructor(private http: HttpClient) { }

  getWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(this.wineUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createWine(wine: Wine): Observable<Wine> {
    const newWine = { ...wine, id: null };
    return this.http.post<Wine>(this.wineUrl, newWine, httpOptions)
      .pipe(
        tap(data => console.log('createWine: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteWine(id: number): Observable<{}> {
    // TODO add check with user that they are sure they want to delete
    const url = `${this.wineUrl}/${id}`;
    return this.http.delete<Wine>(url, httpOptions)
      .pipe(
        tap(data => console.log('deleteWine: ' + id)),
        catchError(this.handleError)
      );
  }

  updateWine(wine: Wine): Observable<Wine> {
    const url = `${this.wineUrl}/${wine.id}`;
    return this.http.put<Wine>(url, wine, httpOptions)
      .pipe(
        tap(() => console.log('updateProduct: ' + wine.id)),
        // Return the wine on an update
        map(() => wine),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {

    // TODO real error handling

    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // client-side or network error occurred
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // backend returned an unsuccessful response code.
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
