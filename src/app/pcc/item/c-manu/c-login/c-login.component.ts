import { PSharedComponent } from './../../../../p-shared/p-component/p-shared.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-login',
  templateUrl: './c-login.component.html',
  styleUrls: ['./c-login.component.css']
})
export class CLoginComponent extends PSharedComponent implements OnInit {


  tokenSignature1: any;
  ngOnInit() {
    this.tokenSignature1 = this._cookieService.get('tokenSignature1');
    // console.log(this.tokenSignature1);
    if (this.tokenSignature1) {
      this.objPayload1 = JSON.parse(localStorage.getItem('tokenPayload1'));

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
    localStorage.removeItem('tokenPayload1');
    this._cookieService.remove('tokenSignature1');
    // this._pLoginService.logout(this.logoutPage);
    // this._location.back();
    window.location.reload();
  }

}
