import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Applicant } from '../models/applicant';
import { ApplicantsService} from '../applicants.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-applicants',
  templateUrl: './list-applicants.component.html',
  styleUrls: ['./list-applicants.component.css']
})
export class ListApplicantsComponent implements OnInit {

  applicants: Applicant[];
  constructor(private applicantService: ApplicantsService,
    private location: Location,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.getApplicants();
  }

  getApplicants(): void {
    this.applicantService.getApplicants()
    .subscribe(applicants => this.applicants = applicants);
  }

  rejectApplicant(_id: string): void {
    this.applicantService.rejectApplicant(_id)
    .subscribe(() => this.goBack());
  }

  acceptApplicant(_id: string): void {
    this.applicantService.acceptApplicant(_id)
    .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.path();
  }

}
