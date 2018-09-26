import { Component, OnInit } from '@angular/core';
import { Finalsurvey } from '../models/finalsurvey';
import { FinalSurveysService } from './final-surveys.service';

@Component({
  selector: 'app-finalsurvey',
  templateUrl: './finalsurvey.component.html',
  styleUrls: ['./finalsurvey.component.css']
})
export class FinalsurveyComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private applicantsService: ApplicantsService,
    private location: Location
  ) { }
  
  finalsurvey = new Finalsurvey('','','','','','','');
  private finalSurveysService: FinalSurveysService;

  ngOnInit() {
  }

  createFinalSurvey(): void {
    this.finalSurveysService.createFinalSurvey(this.finalsurvey)
    .subscribe(() => this.goBack());;
  }

  submmit(): void{
    console.log(this.finalsurvey.teamWork);
    console.log(this.finalsurvey.communication);
    console.log(this.finalsurvey.logistic);

    this.createFinalSurvey();
  }

  goBack(): void {
    this.location.back();
  }
}
