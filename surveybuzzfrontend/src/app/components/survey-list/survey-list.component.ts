import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';
import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css'],
})
export class SurveyListComponent implements OnInit {
  Surveys: any = [];
  currentUser: any = {};

  constructor(
    private crudService: CrudService,
    public authService: AuthService,
    public router: Router
    ) {}

  ngOnInit(): void {
    this.crudService.GetSurveys().subscribe((res) => {
      console.log(res);
      this.Surveys = res;
    });
  }

  delete(id: any, i: any) {
    console.log(id);
    if (this.authService.isLoggedIn) {
      if (window.confirm('Do you want to go ahead?')) {
        this.crudService.deleteSurvey(id).subscribe((res) => {
          this.Surveys.splice(i, 1);
        });
      }
    } else {
      this.router.navigate(['log-in'])
    } 
  }
}