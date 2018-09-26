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

  private surveysUrl = 'api/surveys';
  constructor(private http: HttpClient) { }

  createSurvey(survey: Survey): Observable<any> {
    return this.http.post(surveysUrl, survey, httpOptions);
  }
}
