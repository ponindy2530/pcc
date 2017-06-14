import { Regis } from './../../pcc-model';
import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
@Component({
  selector: 'app-pcc-register',
  templateUrl: './pcc-register.component.html',
  styleUrls: ['./pcc-register.component.css']
})
export class PccRegisterComponent extends PSharedComponent implements OnInit {

  model = new Regis();
  tokenSignature1: string;
  ngOnInit() {

    this.tokenSignature1 = this._cookieService.get('tokenSignature1');
    if (this.tokenSignature1) {
      this._router.navigate(['home']);
    } else {
      this.updateId = 0;
      this._pSharedService.apiData(6)
        .subscribe(res => this.models = res,
        err => console.log(err), () => {

        });
    }


  }
  ckuser(ev) {
    if (ev.target.value.length >= 1) {
      let dataText = ev.target.value;
      this._pSharedService.apiData1(12, dataText)
        .subscribe(res => this.models1 = res[0],
        err => console.log(err), () => {
          // console.log(this.models1.a);

          if (this.models1.a == 1) {
            swal(
              ' Username นี้ !!',
              'มีผู้ใช้งานแล้ว'
            );
            this.model.usernames = '';
          }
        });
    }
  }

  save() {
    let pd = this.model;
    this._pSharedService.addData('pcc_user', 'id', this.updateId, pd)
      .subscribe(res => this.addmodel = res,
      err => console.log(err), () => {
        if (this.addmodel) {
          this.model = new Regis();
          swal(
            'ระบบทำการสมัครสมาชิก !',
            'เรียบร้อยแล้ว',
            'success'
          );
          this._router.navigate(['loginnew']);
        }
      });

  }

}
