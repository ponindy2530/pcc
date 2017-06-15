import { Pcmodel } from './../../pcc-model';
import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
declare var jQuery: any;
@Component({
  selector: 'app-pcc-channel',
  templateUrl: './pcc-channel.component.html',
  styleUrls: ['./pcc-channel.component.css']
})
export class PccChannelComponent extends PSharedComponent implements OnInit {


  pccshow: boolean = false;
  apiKeyVdoList1: number = 1;
  apiKeyVdoList2: number = 2;
  pccdetail: boolean = false; //ข้อมูลโชว์

  pccformvdo: boolean = false; //ข้อมูลโชว์
  pccformimg: boolean = false; //ข้อมูลโชว์
  listvdo: boolean = false;
  listvdo1: boolean = false;
  tokenSignature1: string;
  ngOnInit() {
    // const tokenPayload = localStorage.getItem('tokenPayload');
    this.tokenSignature1 = this._cookieService.get('tokenSignature1');
    if (this.tokenSignature1) {
      this.objPayload1 = JSON.parse(localStorage.getItem('tokenPayload1'));
      // console.log(this.objPayload[0].id);
      this.pccshow = true;
      this.listvdo = true;
      this.listvdo1 = true;
    } else {
      this.opLogin();
    }
  }

  opLogin() {
    let loginPage = this._pLoginService.loginPath('login');
    swal({
      title: 'กรุณาเข้าสู่ระบบก่อน!',
      text: 'เพื่อที่จะลงข้อมูลได้',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'เข้าสู่ระบบ',
      cancelButtonText: 'ยกเลิก',
    }).then(() => {
      // window.location.href = loginPage;
      this._router.navigate(['loginnew']);
      // console.log(loginPage);
    }, (dismiss) => {
      if (dismiss === 'cancel') {
        this._router.navigate(['home']);
      }
    })
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
      this.listvdo = false;
      this.listvdo1 = false;
      this.editDataForm = new Pcmodel();
    } else if (ev == 2) {
      this.pccformvdo = false;
      this.pccformimg = true;
      this.listvdo = false;
      this.listvdo1 = false;
      this.editDataForm = new Pcmodel();
    } else {
      this.pccformvdo = false;
      this.pccformimg = false;
      this.listvdo = true;
      this.listvdo1 = true;
    }
  }
  editDataForm: Pcmodel;
  toDatalist(ev) {
    // console.log(ev);
    if (ev.st == 1) {
      this.pccformvdo = true;
      this.pccformimg = false;
      this.listvdo = false;
      this.listvdo1 = false;
      this.editDataForm = ev;
    } else {
      this.pccformvdo = false;
      this.pccformimg = true;
      this.listvdo = false;
      this.listvdo1 = false;
      this.editDataForm = ev;
    }

  }

}
