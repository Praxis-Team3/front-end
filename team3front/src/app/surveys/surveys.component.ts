import { Component, OnInit } from '@angular/core';
import { Survey } from '../models/survey';

export interface Tutor {
  name: string;
  subject: string;
}

export interface Option {
  value: string;
}

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {

  constructor() { }
  sessionDate: Date;
  survey = new Survey(this.sessionDate,'','','','','','','','','','','','');
  sessionType: string;
  tutorName: string;
  
  satisfactionLevel: string;
  knowledgeTopic: string;

  ngOnInit() {
  }

  send(): void{
    console.log(this.survey.sessionType);
    console.log(this.survey.sessionDate);  
    console.log(this.survey.tutorName);  
    console.log(this.survey.satisfactionLevel);  
    console.log(this.survey.knowledgeTopic);  
    console.log(this.survey.sessionResources);  
  }
  tutors: Tutor[] = [
    {name: 'David', subject: 'Introduction'},
    {name: 'Felipe', subject: 'Secutiry'},
    {name: 'Leonardo', subject: 'Big Data'}
  ];

  options: Option[] = [
    {value:'Excellent'},
    {value:'Good'},
    {value:'Deficient'}
  ];

}
