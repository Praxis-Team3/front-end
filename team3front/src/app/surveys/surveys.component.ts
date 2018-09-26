import { Component, OnInit } from '@angular/core';
import { Survey } from '../models/survey';
import { SurveysService } from './surveys.service';

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

  constructor(
    private route: ActivatedRoute,
    private applicantsService: ApplicantsService,
    private location: Location
  ) { }

  sessionDate: Date;
  survey = new Survey(this.sessionDate,'','','','','','','','','','','','');
  private surveysService: SurveysService;

  ngOnInit() {
  }

  createSurvey(): void {
    this.surveysService.createSurvey(this.survey)
    .subscribe(() => this.goBack());;
  }

  send(): void{
    console.log(this.survey.sessionType);
    console.log(this.survey.sessionDate);
    console.log(this.survey.tutorName);
    console.log(this.survey.satisfactionLevel);
    console.log(this.survey.knowledgeTopic);
    console.log(this.survey.sessionResources);
    console.log(this.survey.abilityToShare);
    console.log(this.survey.dynamic);
    console.log(this.survey.solvedQuestions);
    console.log(this.survey.tone);
    console.log(this.survey.suggestions);

    this.createSurvey();
  }

  goBack(): void {
    this.location.back();
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
