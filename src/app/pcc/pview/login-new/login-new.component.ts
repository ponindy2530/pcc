import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
@Component({
  selector: 'app-login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.css']
})
export class LoginNewComponent extends PSharedComponent implements OnInit {



  usernames: string;
  passwords: string;
  tokenSignature1: any;
  ngOnInit() {
    this.tokenSignature1 = this._cookieService.get('tokenSignature1');
    if (this.tokenSignature1) {
      this._location.back();
    }
  }

  save() {
    // console.log(this.usernames);
    // console.log(this.passwords);
    let u = this.usernames;
    let p = this.passwords;
    this._pSharedService.apiData2(7, u, p)
      .subscribe(res => this.models = res[0],
      err => console.log(err), () => {
        if (this.models.a === '1') {
          this.getUser(u, p);
        } else {
          swal(
            'Username or Password',
            'ไม่ถูกต้อง !!!',
            'error'
          );
        }
      });

  }

  getUser(u, p) {
    this._pSharedService.apiData2(8, u, p)
      .subscribe(res => this.models1 = res,
      err => console.log(err), () => {
        localStorage.setItem('tokenPayload1', JSON.stringify(this.models1));
        this._cookieService.put('tokenSignature1', this.models1[0].id);
        window.location.reload();
      });
  }

}
