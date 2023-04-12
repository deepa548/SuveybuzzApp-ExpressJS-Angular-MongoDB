import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddSurveyComponent } from './components/add-survey/add-survey.component';
import { SurveyDetailComponent } from './components/survey-detail/survey-detail.component';
import { SurveyListComponent } from './components/survey-list/survey-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BasepageComponent } from './components/basepage/basepage.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/authconfig.interceptor';
import { SurveyresponseComponent } from './components/surveyresponse/surveyresponse.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSurveyComponent,
    SurveyDetailComponent,
    SurveyListComponent,
    HeaderComponent,
    FooterComponent,
    BasepageComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    SurveyresponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
