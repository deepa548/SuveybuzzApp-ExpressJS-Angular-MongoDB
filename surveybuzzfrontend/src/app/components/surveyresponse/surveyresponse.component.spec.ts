import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyresponseComponent } from './surveyresponse.component';

describe('SurveyresponseComponent', () => {
  let component: SurveyresponseComponent;
  let fixture: ComponentFixture<SurveyresponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyresponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
