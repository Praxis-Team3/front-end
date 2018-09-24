import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicantsService } from '../applicants.service';
import { Location } from '@angular/common';
import { Applicant } from '../applicant';


@Component({
  selector: 'app-applicant-detail',
  templateUrl: './applicant-detail.component.html',
  styleUrls: ['./applicant-detail.component.css']
})
export class ApplicantDetailComponent implements OnInit {

  private applicant: Applicant;
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
}
