import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import { ListApplicantsComponent } from './list-applicants/list-applicants.component';
import { ApplicantDetailComponent } from './applicant-detail/applicant-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'applicants', component: ListApplicantsComponent},
  { path: 'detail/:id', component: ApplicantDetailComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})

export class AppRoutingModule { }
