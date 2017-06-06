import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { CookieService } from 'angular2-cookie/core';

import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class PLoginService {
    opts: RequestOptions;

    private headers: Headers;
    constructor(private _http: Http, private _cookieService: CookieService) { }


    getLogin(id: string): Observable<any> {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        let url = 'http://203.157.182.15/accounts/api/loginForm/' + id;
        // headers.append('Content-Type', 'application/json');
        return this._http.get(url)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(err: Response) {
        let details = { status: err.status, error: err.json() };
        return Observable.throw(details);
    }

    loginPath(onPath: string) {
        const fullPath = this.fullPath();
        const followup = this.utoa(fullPath);
        const cli = this.utoa('cpho#005');
        const loc = this.utoa('http://203.157.182.15/accounts/api/loginForm');
        const clog = this.utoa('http://localhost:4201/login?');

        return 'http://203.157.182.15/accounts/' + onPath + '?followup=' + followup + '&cli=' + cli + '&loc=' + loc + '&clog=' + clog;
    }

    logout(logoutUrl) {
        localStorage.removeItem('tokenHeader');
        localStorage.removeItem('tokenPayload');
        this._cookieService.removeAll();
        window.location.href = logoutUrl;
    }

    fullPath() {
        return window.location.href;
    }

    // ucs-2 string to base64 encoded ascii
    utoa(str) {
        return window.btoa(str).replace('=', '');
    }
    // base64 encoded ascii to ucs-2 string
    atou(str) {
        return window.atob(str.replace('=', ''));
    }

}
