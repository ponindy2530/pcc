import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pcc-home',
  templateUrl: './pcc-home.component.html',
  styleUrls: ['./pcc-home.component.css']
})
export class PccHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  apiKeyList:number = 3;

}
