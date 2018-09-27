import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatListModule} from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatDatepickerModule,
  MatNativeDateModule, MatOptionModule, MatSelectModule, MatFormFieldModule, MatRadioModule, MatStepperModule
} from '@angular/material';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HttpClientModule } from '@angular/common/http'; 

import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListApplicantsComponent } from './list-applicants/list-applicants.component';
import { ApplicantDetailComponent } from './applicant-detail/applicant-detail.component';
import { SurveysComponent } from './surveys/surveys.component';
import { FinalsurveyComponent } from './finalsurvey/finalsurvey.component';
import { HelpComponent } from './help/help.component';
import { RegistrationComponent } from './registration/registration.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    ListApplicantsComponent,
    ApplicantDetailComponent,
    SurveysComponent,
    FinalsurveyComponent,
    HelpComponent,
    RegistrationComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatFormFieldModule,
    MatStepperModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
     // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
  
    MatRadioModule,
    AppRoutingModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
