import { PSharedComponent } from './../../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pcc-homelist',
  templateUrl: './pcc-homelist.component.html',
  styleUrls: ['./pcc-homelist.component.css']
})
export class PccHomelistComponent extends PSharedComponent implements OnInit, OnChanges {


  @Input() apiKeyList: number;

  ngOnChanges() {
    let apiKey = this.apiKeyList;
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

}
