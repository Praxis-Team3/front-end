import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs';

import { Finalsurvey } from '../models/finalsurvey';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FinalSurveysService {

  private finalSurveysUrl = 'api/finalSurveys';
  constructor(private http: HttpClient) { }

  createFinalSurvey(finalSurvey: Finalsurvey): Observable<any> {
    return this.http.post(this.finalSurveysUrl, finalSurvey, httpOptions);
  }
}
