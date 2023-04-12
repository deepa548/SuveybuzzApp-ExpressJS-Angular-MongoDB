import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { CrudService } from './../../service/crud.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})

export class UserProfileComponent implements OnInit {
  userID: any = {};
  currentUser: any = {};
  profile: any = {};
  Surveys: any = [];
  unitNo: any;
  NoResp: any = 'NaN';

  constructor(
    public authService: AuthService,
    private router: Router,
    private crudService: CrudService,
    private actRoute: ActivatedRoute,
  ) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe((res) => {
      this.currentUser = res.msg;
    });
  }

  ngOnInit(): void {
    this.crudService.GetSurveys().subscribe((res) => {
      console.log(res);
      this.Surveys = res;
    });
  }

  exportexcel(): void {
    let element = document.getElementById('export-table')
    const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(element)
    const wb:XLSX.WorkBook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb,ws, 'SurveyStat')
    XLSX.writeFile(wb, 'SurveyStat.xlsx')
  }
  
}
