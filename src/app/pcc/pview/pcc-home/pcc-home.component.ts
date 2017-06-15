import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
import swal from 'sweetalert2';

@Component({
  selector: 'app-pcc-home',
  templateUrl: './pcc-home.component.html',
  styleUrls: ['./pcc-home.component.css']
})
export class PccHomeComponent extends PSharedComponent implements OnInit {



  ngOnInit() {
  }

  apiKeyList: number = 3;

  pccdetail: boolean = false; //ข้อมูลโชว์

  shoid: number = 13;
  shoid1: number = 14;
  shoid2: number = 15;
  shoid3: number = 16;
  idcop1: number = 1;
  idcop2: number = 2;
  idcop3: number = 3;

  so1: boolean = true;
  so2: boolean = true;
  so3: boolean = true;
  so4: boolean = true;
  showform(ev: number) {
    this.apiKeyList = ev;
  }

  getlisttopccdetail: any;
  tokenSignature1: string;
  tolistpcc(ev: any) {
    this.tokenSignature1 = this._cookieService.get('tokenSignature1');
    if (this.tokenSignature1) {
      this.objPayload1 = JSON.parse(localStorage.getItem('tokenPayload1'));
      jQuery('.modal').modal({
        dismissible: true
      });

      this.pccdetail = true;
      this.getlisttopccdetail = ev;
    } else {
      this.opLogin();
    }
  }

  opLogin() {
    let loginPage = this._pLoginService.loginPath('login');
    swal({
      title: 'กรุณาเข้าสู่ระบบก่อน!',
      text: 'เพื่อดูข้อมูล',
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
    });
  }


  sho(ev) {
    if (ev == 1) {
      this.so1 = true;
      this.so2 = true;
      this.so3 = true;
      this.so4 = true;
      this.shoid = 13;
    } else if (ev == 2) {
      this.so1 = true;
      this.so2 = true;
      this.so3 = false;
      this.so4 = false;
      this.shoid = 17;
    } else if (ev == 3) {
      this.so1 = true;
      this.so2 = false;
      this.so3 = true;
      this.so4 = false;
      this.shoid = 18;
    } else {
      this.so1 = true;
      this.so2 = false;
      this.so3 = false;
      this.so4 = true;
      this.shoid = 19;
    }
  }

}
