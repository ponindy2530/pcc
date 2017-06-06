import { PSharedComponent } from './../../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
declare var jQuery: any;
import * as _ from "lodash";
@Component({
  selector: 'app-item-pcc-detail',
  templateUrl: './item-pcc-detail.component.html',
  styleUrls: ['./item-pcc-detail.component.css']
})
export class ItemPccDetailComponent extends PSharedComponent implements OnInit, OnChanges {


  @Input() getlisttopccdetail: any;

  ngOnChanges() {
    this.showfile = [];
    // console.log(this.getlisttopccdetail);
    // console.log(JSON.parse(this.getlisttopccdetail.files));
    let files = JSON.parse(this.getlisttopccdetail.files);
    this.getDataFile(files);
  }

  showfile: any = [];
  countfile:number;
  getDataFile(files) {
    if (files) {
      // console.log(files);
      this.countfile = _.size(files)
      this.showfile = files;
    }
  }

  ngOnInit() {

  }

}
