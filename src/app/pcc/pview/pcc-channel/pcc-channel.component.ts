import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-pcc-channel',
  templateUrl: './pcc-channel.component.html',
  styleUrls: ['./pcc-channel.component.css']
})
export class PccChannelComponent implements OnInit {

  constructor() { }


  apiKeyVdoList1: number = 1;
  apiKeyVdoList2: number = 2;
  pccdetail: boolean = false; //ข้อมูลโชว์

  pccformvdo: boolean = false; //ข้อมูลโชว์
  pccformimg: boolean = false; //ข้อมูลโชว์
  ngOnInit() {

  }

  getlisttopccdetail: any;
  tolistpcc(ev: any) {
    jQuery('.modal').modal({
      dismissible: true
    });

    this.pccdetail = true;
    this.getlisttopccdetail = ev;
  }

  onCloseModal() {
    jQuery('#modal1').modal('close');
  }

  showform(ev: number) {
    if (ev == 1) {
      this.pccformvdo = true;
      this.pccformimg = false;
    } else if (ev == 2) {
      this.pccformvdo = false;
      this.pccformimg = true;
    } else {
      this.pccformvdo = false;
      this.pccformimg = false;
    }
  }

}
