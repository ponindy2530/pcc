import { PSharedComponent } from './../../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import * as _ from "lodash";
@Component({
  selector: 'app-item-listvdo',
  templateUrl: './item-listvdo.component.html',
  styleUrls: ['./item-listvdo.component.css']
})
export class ItemListvdoComponent extends PSharedComponent implements OnInit, OnChanges {
  @Input() apiKeyVdoList: number;

  ngOnChanges() {
    let apiKey = this.apiKeyVdoList;
    this.getData(apiKey);
  }


  getData(apiKey) {
    this._pSharedService.apiData(apiKey)
      .subscribe(res => this.models = res,
      err => console.log(err),
      () => {
        // let t = this.models
        // console.log(_.size(this.models));

        // console.log(this.models);
        // console.log(JSON.parse(this.models[0].files));


      });
  }

  ngOnInit() {
  }

  @Output() tolistpcc = new EventEmitter();

  getlistpcc(ev: any) {
    this.tolistpcc.emit(ev);
  }

}
