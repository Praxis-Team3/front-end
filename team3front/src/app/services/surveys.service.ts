import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs';

import { Survey } from '../models/survey';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SurveysService {

  private surveysUrl = 'https://front-workshop.herokuapp.com/surveys';
  constructor(private http: HttpClient) { }

  /*POST : Add a new survey to the server*/
  
  saveSurvey (survey: Survey): Observable<Survey> {
    return this.http.post<Survey>(this.surveysUrl, survey, httpOptions).pipe(
      tap((survey: Survey) => console.log(`Saved survey succesfully`))
    );
  }
  
  /* Get Surveys from the server */
  getSurveys (): Observable<Survey[]> {
    return this.http.get<Survey[]>(this.surveysUrl)
    .pipe(
      tap(surveys => console.log('fetched surveys'))
    );
  }
}
