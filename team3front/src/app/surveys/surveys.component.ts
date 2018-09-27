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
    private location: Location,
    private surveysService: SurveysService,
    
  ) { }
  tempDate : Date;
  survey = new Survey(this.tempDate,'','','','','','','','','','','','');
  
  
  ngOnInit() {
  }

  save(): void {
    this.survey.sessionDate.toISOString();
    this.surveysService.createSurvey(this.survey).subscribe();
    console.log("Service called");
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
    {name: 'Ariel Peña Ocando', subject: 'Quality Assurance'},
    {name: 'Alejandro Rosero Vicuña', subject: 'Automated Regression Testing'},
    {name: 'Sebastian Ruiz Villa', subject: 'DevOps'}
  ];

  options: Option[] = [
    {value:'Excellent'},
    {value:'Good'},
    {value:'Deficient'}
  ];

}
