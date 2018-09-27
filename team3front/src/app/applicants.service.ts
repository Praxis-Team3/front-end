import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs';

import { Applicant } from './models/applicant';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApplicantsService {

  private applicantsUrl = 'https://front-workshop.herokuapp.com/applicants';

  constructor(private http: HttpClient) { }

  getApplicants(): Observable<Applicant[]> {
    return this.http.get<Applicant[]>(this.applicantsUrl)
    .pipe(
      tap(heroes => this.log('fetched applicants')),
      catchError(this.handleError('getApplicants', []))
    );
  }

  getApplicant404<Data>(id: string): Observable<Applicant> {
    const url = `${this.applicantsUrl}/?id=${id}`;
    return this.http.get<Applicant[]>(url)
    .pipe(
      map(applicants => applicants[0]),
      tap (h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} applicant id = ${id}`);
      }),
      catchError (this.handleError<Applicant>(`getHero id = ${id}`))
    );
  }

  getApplicant(id: string): Observable<Applicant> {
    const url = `${this.applicantsUrl}/${id}`;
    return this.http.get<Applicant>(url).pipe(
      tap(_ => this.log(`fetched applicant _id=${id}`)),
      catchError(this.handleError<Applicant>(`getHero id=${id}`))
    );
  }

  addApplicant(applicant: Applicant): Observable<Applicant> {
    return this.http.post<Applicant>(this.applicantsUrl, applicant, httpOptions).pipe(
        tap((student: Applicant) => this.log(`added applicant w/ id=${applicant.id} w/ name=${applicant.names}`)),
        catchError(this.handleError<Applicant>('addApplicant'))
    );
}

  //////////////////////// Save methods ////////////////////

  acceptApplicant (id: string): Observable<any> {
    const url = `${this.applicantsUrl}/${id}/accept`;
    return this.http.post(url, httpOptions).pipe(
      tap(_ => this.log(`updated applicant id=${id}`)),
      catchError(this.handleError<any>('updateApplicant'))
    );
  }

  rejectApplicant (id: string): Observable<any> {
    const url = `${this.applicantsUrl}/${id}/deny`;
    return this.http.post(url, httpOptions).pipe(
      tap(_ => this.log(`updated applicant id=${id}`)),
      catchError(this.handleError<any>('updateApplicant'))
    );
  }

  searchPendingApplicants(): Observable<Applicant[]> {
    return this.http.get<Applicant[]>(`${this.applicantsUrl}`).pipe(
      tap(_ => this.log(`found pending applicants`)),
      catchError(this.handleError<Applicant[]>('searchPendingApplicants', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
