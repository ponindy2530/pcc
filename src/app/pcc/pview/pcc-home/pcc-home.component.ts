import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-pcc-home',
  templateUrl: './pcc-home.component.html',
  styleUrls: ['./pcc-home.component.css']
})
export class PccHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  apiKeyList: number = 3;

  pccdetail: boolean = false; //ข้อมูลโชว์

  showform(ev: number) {
    this.apiKeyList = ev;
  }

  getlisttopccdetail: any;
  tolistpcc(ev: any) {
    jQuery('.modal').modal({
      dismissible: true
    });

    this.pccdetail = true;
    this.getlisttopccdetail = ev;
  }

}
