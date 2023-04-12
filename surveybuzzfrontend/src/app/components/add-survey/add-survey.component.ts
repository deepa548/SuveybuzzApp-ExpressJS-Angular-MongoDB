import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css'],
})
export class AddSurveyComponent implements OnInit {
  surveyForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.surveyForm = this.formBuilder.group({
      Surveyid: [''],
      Surveyname: [''],
      CreatedDate: [''],
      ExpiryDate: [''],
      SurveyQuestion1: [''],
      SurveyAnswer1: [''],
      SurveyQuestion2: [''],
      SurveyAnswer2: [''],
      SurveyQuestion3: [''],
      SurveyAnswer3: [''],
    });
  }

  ngOnInit() {}

  onSubmit(): any {
    this.crudService.AddSurvey(this.surveyForm.value).subscribe(
      () => {
        console.log('Data added successfully!');
        this.ngZone.run(() => this.router.navigateByUrl('/survey-list'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

