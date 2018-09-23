import { Component, OnInit } from '@angular/core';

export interface Tutor {
  name: string;
  subject: string;
}

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {

  constructor() { }

  sessionType: string;
  tutorName: string;

  ngOnInit() {
  }

  send(): void{

  }
  tutors: Tutor[] = [
    {name: 'David', subject: 'Introduction'},
    {name: 'Felipe', subject: 'Secutiry'},
    {name: 'Leonardo', subject: 'Big Data'}
  ];

}
