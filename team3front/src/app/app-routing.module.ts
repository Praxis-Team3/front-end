import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import { ListApplicantsComponent } from './list-applicants/list-applicants.component';
import { ApplicantDetailComponent } from './applicant-detail/applicant-detail.component';
import {SurveysComponent} from './surveys/surveys.component';
import {FinalsurveyComponent} from './finalsurvey/finalsurvey.component';
import {HelpComponent} from './help/help.component';
import { RegistrationComponent } from './registration/registration.component';
import { SuccessComponent } from './success/success.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'applicants', component: ListApplicantsComponent},
  { path: 'sessionsurvey', component: SurveysComponent},
  { path: 'finalsurvey', component: FinalsurveyComponent},
  { path: 'help', component: HelpComponent},
  { path: 'applytopraxis', component: RegistrationComponent},
  { path: 'success', component: SuccessComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})

export class AppRoutingModule { }
