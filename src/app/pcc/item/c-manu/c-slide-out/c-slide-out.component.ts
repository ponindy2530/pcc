import { PSharedComponent } from './../../../../p-shared/p-component/p-shared.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-slide-out',
  templateUrl: './c-slide-out.component.html',
  styleUrls: ['./c-slide-out.component.css']
})
export class CSlideOutComponent extends PSharedComponent implements OnInit {

  tokenSignature1: any;
  ngOnInit() {
    this.tokenSignature1 = this._cookieService.get('tokenSignature1');
    if (this.tokenSignature1) {
      this.objPayload = JSON.parse(localStorage.getItem('tokenPayload1'));

    }
    // console.log(this.tokenSignature1);
    // this.logoutPage = this._pLoginService.loginPath('logout');

    // const tokenPayload = localStorage.getItem('tokenPayload');
    // if (tokenPayload)
    //   this.objPayload = JSON.parse(this._pLoginService.atou(localStorage.getItem('tokenPayload')));
    // this.loginPage = this._pLoginService.loginPath('login');
    // this.logoutPage = this._pLoginService.loginPath('logout');
    // this.tokenSignature = this._cookieService.get('tokenSignature');
  }

  logout() {
    // this._pLoginService.logout(this.logoutPage);
    localStorage.removeItem('tokenPayload1');
    this._cookieService.removeAll();
    window.location.reload();
  }

}
