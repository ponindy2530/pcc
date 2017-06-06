import { PLoginService } from './../p-service/p-login.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PSharedService } from './../p-service/p-shared.service';
import { Location } from '@angular/common';
import { Message } from 'primeng/primeng';
@Component({
  selector: 'app-p-shared',
  templateUrl: './p-shared.component.html',
  styleUrls: ['./p-shared.component.css']
})
export class PSharedComponent implements OnInit {

  constructor(
    public _activatedRoute: ActivatedRoute,
    public _router: Router,
    public _pSharedService: PSharedService,
    public _cookieService: CookieService,
    public _pLoginService: PLoginService,
    public _location: Location
  ) { }

  public msgs: Message[];
  models: any = [];
  models1: any = [];
  models2: any = [];
  pd: any = [];
  updateId: number;
  addmodel: any = [];
  del: any = [];

  loginPage: string;
  logoutPage: string;

  tokenHeader: string;
  tokenPayload: string;
  tokenSignature: string;
  objPayload: any;
  ngOnInit() {
  }

}
