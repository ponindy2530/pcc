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

}
