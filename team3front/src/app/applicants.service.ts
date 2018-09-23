import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Applicant } from './applicant';

@Injectable({
  providedIn: 'root'
})
export class ApplicantsService {

  constructor(private http: HttpClient) { }
}
