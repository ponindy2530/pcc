import { PSharedComponent } from './../../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

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
        console.log(this.models);
      });
  }

  ngOnInit() {
  }

}
