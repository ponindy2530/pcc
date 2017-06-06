import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends PSharedComponent implements OnInit {



  ngOnInit() {
    const id = this._activatedRoute.snapshot.queryParams['id'];
    const followup = this._activatedRoute.snapshot.queryParams['followup'];
    const tokenSignature = this._cookieService.get('tokenSignature');
    if (!tokenSignature)
      this.getLogin(id, followup);
    else
      this._location.back();
  }

  getLogin(id, followup) {
    this._pLoginService.getLogin(id).subscribe(res => {
      const jwt = res.jwt_token.split('.');
      localStorage.setItem('tokenHeader', jwt[0]);
      localStorage.setItem('tokenPayload', jwt[1]);
      this._cookieService.put('tokenSignature', jwt[2]);
      window.location.href = this._pLoginService.atou(followup);
    }, err => {
      console.log(err);
    }
    );
  }

}
