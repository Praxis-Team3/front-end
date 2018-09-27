import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicantsService } from '../applicants.service';
import { Location } from '@angular/common';
import { Applicant } from '../models/applicant';


@Component({
  selector: 'app-applicant-detail',
  templateUrl: './applicant-detail.component.html',
  styleUrls: ['./applicant-detail.component.css']
})
export class ApplicantDetailComponent implements OnInit {

  public applicant: Applicant;
  public applicants = [
    {
        id: 1,
        names: 'José Francisco',
        lastnames: 'Diaz',
        birthday: '02/04/1996',
        email: 'jofdiazdi@unal.edu.co',
        password: '12345',
        // need to add video
    },
    {
        id: 2,
        names: 'Carlos Miguel',
        lastnames: 'Pinzon',
        birthday: '02/04/1996',
        email: 'cmpinzonh@unal.edu.co',
        password: '12345',
        // need to add vide
    },
    {
        id: 3,
        names: 'José',
        lastnames: 'Yepez',
        birthday: '02/04/1996',
        email: 'jdyepest@unal.edu.co',
        password: '12345',
        // need to add video
    },
];
  constructor(
    private route: ActivatedRoute,
    private applicantsService: ApplicantsService,
    private location: Location ) { }

  ngOnInit() {
    this.getApplicant();
  }

  getApplicant(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.applicantsService.getApplicant(id)
    .subscribe(applicant => this.applicant = applicant);
  }

  rejectApplicant(): void {
    //this.applicant.status = 'rejected';
    //this.applicant.pending = false;
    this.applicantsService.updateApplicant(this.applicant)
    .subscribe(() => this.goBack());
  }

  acceptApplicant(): void {
    //this.applicant.status = 'accepted';
    //this.applicant.pending = false;
    this.applicantsService.updateApplicant(this.applicant)
    .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
