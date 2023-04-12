import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-surveyresponse',
  templateUrl: './surveyresponse.component.html',
  styleUrls: ['./surveyresponse.component.css']
})
export class SurveyresponseComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;
  Surveys: any = [];
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.GetSurvey(this.getId).subscribe((res) => {
      this.updateForm.setValue({
        SurveyAnswer1: res['SurveyAnswer1'],
        SurveyAnswer2: res['SurveyAnswer2'],
        SurveyAnswer3: res['SurveyAnswer3'],
      });
    });

    this.updateForm = this.formBuilder.group({
      SurveyAnswer1: [''],
      SurveyAnswer2: [''],
      SurveyAnswer3: [''],
    });
  }

  ngOnInit(): void {
    this.crudService.GetSurveys().subscribe((res) => {
      console.log(res);
      this.Surveys = res;
    });
  }

  onUpdate(): any {
    this.crudService.updateSurvey(this.getId, this.updateForm.value).subscribe(
      () => {
        console.log('Data updated successfully!');
        this.ngZone.run(() => this.router.navigateByUrl('/survey-list'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
}