import { Component, OnInit } from '@angular/core';
import { Finalsurvey } from '../models/finalsurvey';
@Component({
  selector: 'app-finalsurvey',
  templateUrl: './finalsurvey.component.html',
  styleUrls: ['./finalsurvey.component.css']
})
export class FinalsurveyComponent implements OnInit {

  constructor() { }
  finalsurvey = new Finalsurvey('','','','','','','');
  ngOnInit() {
  }

  submmit(): void{
    console.log(this.finalsurvey.teamWork);
    console.log(this.finalsurvey.communication);
    console.log(this.finalsurvey.logistic);
  }
}
