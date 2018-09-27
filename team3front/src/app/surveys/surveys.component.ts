import { Component, OnInit } from '@angular/core';
import { Survey } from '../models/survey';
import { SurveysService } from '../services/surveys.service';
import { Location } from '@angular/common';

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
    //private route: ActivatedRoute,
    //private applicantsService: ApplicantsService,
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
    {name: 'David Vazquez Rivera', subject: 'Introduction'},
    {name: 'Felipe Acosta ', subject: 'Secutiry'},
    {name: 'Leonardo Talero Niño', subject: 'Big Data'},
    {name: 'Gustavo Adolfo Arroyave Lopez', subject: 'Agile'},
    {name: 'Juan Fernando Moreno Marín' , subject: 'UX'},
    {name: 'Johan Miguel Ruiz Rodriguez', subject: 'Software Architecture'},
    {name: 'Lia Sanchez Echeverri', subject: 'Requirements'},
    {name: 'Jesus David Sanchez Escobar', subject: 'Back End'},
    {name: 'Leonardo Uribe', subject: 'Front End'},
    {name: 'Raúl Alberto Zuluaga', subject:'Cloud Computing'},
    {name: 'Ariel Peña Ocando', subject: 'Quality Assurance'}
  ];

  options: Option[] = [
    {value:'Excellent'},
    {value:'Good'},
    {value:'Deficient'}
  ];

}
