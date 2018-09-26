import { Component, OnInit } from '@angular/core';

import { Applicant } from '../applicant';
import { ApplicantsService} from '../applicants.service';

@Component({
  selector: 'app-list-applicants',
  templateUrl: './list-applicants.component.html',
  styleUrls: ['./list-applicants.component.css']
})
export class ListApplicantsComponent implements OnInit {

  applicants: Applicant[];
  constructor(private applicantService: ApplicantsService) { }

  ngOnInit() {
    this.getPendingApplicants();
  }

  getPendingApplicants(): void {
    this.applicantService.searchPendingApplicants()
    .subscribe(applicants => this.applicants = applicants);
  }

}
