import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
declare var jQuery: any;
import swal from 'sweetalert2';
import * as _ from "lodash";
@Component({
  selector: 'app-showhomevdo',
  templateUrl: './showhomevdo.component.html',
  styleUrls: ['./showhomevdo.component.css']
})
export class ShowhomevdoComponent extends PSharedComponent implements OnInit, OnChanges {


  models3: any;
  filex: string;
  @Input() apiKey: number;

  ngOnChanges(): void {
    this._pSharedService.apiData(this.apiKey)
      .subscribe(res => this.models = res,
      err => console.log(err),
      () => {

        if (_.size(this.models) >= 1) {
          this.xxxvdo = true;
          // console.log(JSON.parse(this.models.files));
          let files = JSON.parse(this.models[0].files);
          // console.log(files[0].generatedName);

          this.filex = `http://164.115.22.73/p/pon-api/pccfile/pcc_${files[0].generatedName}`;
        }

      });
  }
  xxxvdo: boolean = false;
  ngOnInit() {




  }

}
