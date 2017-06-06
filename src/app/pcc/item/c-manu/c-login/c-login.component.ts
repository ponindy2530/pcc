import { PSharedComponent } from './../../../../p-shared/p-component/p-shared.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-login',
  templateUrl: './c-login.component.html',
  styleUrls: ['./c-login.component.css']
})
export class CLoginComponent extends PSharedComponent implements OnInit {



  ngOnInit() {

    const tokenPayload = localStorage.getItem('tokenPayload');
    if (tokenPayload)
      this.objPayload = JSON.parse(this._pLoginService.atou(localStorage.getItem('tokenPayload')));

    this.loginPage = this._pLoginService.loginPath('login');
    this.logoutPage = this._pLoginService.loginPath('logout');
    this.tokenSignature = this._cookieService.get('tokenSignature');
  }

  logout() {
    this._pLoginService.logout(this.logoutPage);
  }

}
