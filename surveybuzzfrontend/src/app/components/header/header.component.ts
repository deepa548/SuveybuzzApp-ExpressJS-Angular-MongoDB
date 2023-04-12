import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userID: any;

  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute
    ) {}
  logout() {
    this.authService.doLogout();
    localStorage.clear();
  }

  ngOnInit(): void {
    let id = localStorage.getItem("userSession");
    this.userID =  id;
    }

}
