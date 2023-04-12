import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSurveyComponent } from './components/add-survey/add-survey.component';
import { SurveyDetailComponent } from './components/survey-detail/survey-detail.component';
import { SurveyListComponent } from './components/survey-list/survey-list.component';
import { BasepageComponent } from './components/basepage/basepage.component';
import { AuthGuard } from './shared/auth.guard';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SurveyresponseComponent } from './components/surveyresponse/surveyresponse.component';


// routes for all pages 

const routes: Routes = [
  {path: '', redirectTo: '/basepage', pathMatch: 'full'},
  {path: 'basepage', component:BasepageComponent},
  { path: 'survey-list', component: SurveyListComponent},
  { path: 'add-survey', component: AddSurveyComponent, canActivate: [AuthGuard]},
  { path: 'edit-survey/:id', component: SurveyDetailComponent, canActivate: [AuthGuard]},
  { path: 'log-in', component: SigninComponent},
  { path: 'sign-up', component: SignupComponent},
  { path: 'user-profile/:id', component: UserProfileComponent, canActivate: [AuthGuard]},
  { path: 'Surveyresponse/:id', component: SurveyresponseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
