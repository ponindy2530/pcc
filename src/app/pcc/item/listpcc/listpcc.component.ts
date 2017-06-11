import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listpcc',
  templateUrl: './listpcc.component.html',
  styleUrls: ['./listpcc.component.css']
})
export class ListpccComponent extends PSharedComponent implements OnInit, OnChanges {

  @Input() apiKey: number;
  @Input() param: number;

  ngOnChanges(): void {
    this.getData(this.apiKey, this.param);
  }

  getData(apiKey, param) {
    this._pSharedService.apiData1(apiKey, param)
      .subscribe(res => this.models = res,
      err => console.log(err), () => {

      });
  }

  @Output() tolistpcc = new EventEmitter();

  getlistpcc(ev: any) {
    this.tolistpcc.emit(ev);
  }


tokenSignature1:string;
  ngOnInit() {
    this.tokenSignature1 = this._cookieService.get('tokenSignature1');
  }

}
