import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { GetAccountResponse } from '../models/GetAccountResponse';
import { Observable } from 'rxjs';
import {environment} from "../Environment";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-account-controller',
  templateUrl: './account-controller.component.html',
  styleUrls: ['./account-controller.component.css']
})
export class AccountControllerComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router, private cookieService: CookieService) { }

  email;

  onSubmit() { 
    this.login().subscribe(
      response => {
        console.log(response);
        this.cookieService.set("uuid", response.account.uuid);
        this.router.navigateByUrl('/notes');
      }
  ); 
  }

  ngOnInit() {
  }

  login() {
    let param: any = {'email': this.email};
    return this.httpClient.get<GetAccountResponse>(environment.apiUrl+"getAccount", {params: param});
  }
}
