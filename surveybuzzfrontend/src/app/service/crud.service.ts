
//Created By web Dev Crew
//Dec 11,2022
//Survey Buzz -A survey site -->

//CRUD  Operations 


import { Injectable } from '@angular/core';
import { Survey } from './Survey';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  // Node/Express API
  REST_API: string = 'https://surveybuzzapp.azurewebsites.net/api';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  // Add
  AddSurvey(data: Survey): Observable<any> {
    let API_URL = `${this.REST_API}/add-survey`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  // Get all objects
  GetSurveys() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  // Get single object
  GetSurvey(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/read-survey/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Update
  updateSurvey(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-survey/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Delete
  deleteSurvey(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-survey/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
