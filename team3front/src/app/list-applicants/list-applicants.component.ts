import { Component, OnInit } from '@angular/core';

import { Applicant } from '../models/applicant';
import { ApplicantsService} from '../applicants.service';

@Component({
  selector: 'app-list-applicants',
  templateUrl: './list-applicants.component.html',
  styleUrls: ['./list-applicants.component.css']
})
export class ListApplicantsComponent implements OnInit {

  applicant: Applicant[];
   applicants = [
    {
        id: 1,
        names: 'José Francisco',
        lastnames: 'Diaz',
        birthdate: '02/04/1996',
        email: 'jofdiazdi@unal.edu.co',
        password: '12345',
        pending : true,
        // need to add video
    },
    {
        id: 2,
        names: 'Carlos Miguel',
        lastnames: 'Pinzon',
        birthdate: '02/04/1996',
        email: 'cmpinzonh@unal.edu.co',
        password: '12345',
        // need to add vide
    },
    {
        id: 3,
        names: 'José',
        lastnames: 'Yepez',
        birthdate: '02/04/1996',
        email: 'jdyepest@unal.edu.co',
        password: '12345',
        // need to add video
    },
];
  constructor(private applicantService: ApplicantsService) { }

  ngOnInit() {
    this.getApplicants();
  }

  getApplicants(): void {
    this.applicantService.getApplicants()
    .subscribe(applicant => this.applicant = applicant);
  }

}
