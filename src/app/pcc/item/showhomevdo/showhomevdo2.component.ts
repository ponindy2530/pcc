import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import * as _ from "lodash";
@Component({
  selector: 'app-showhomevdo2',
  templateUrl: './showhomevdo2.component.html',
  styleUrls: ['./showhomevdo2.component.css']
})
export class Showhomevdo2Component extends PSharedComponent implements OnInit, OnChanges {
kkkk:any;
  @Input() apiKey: number;
  @Input() idcop: number;
  ngOnChanges(): void {
           this.xxxvdo = false;
    this._pSharedService.apiData(this.apiKey)
      .subscribe(res => this.models1 = res,
      err => console.log(err),
      () => {
    //  console.log(_.size(this.models1));

        // console.log(JSON.parse(this.models1[0].files));
        // let files = JSON.parse(this.models1[0].files);
        // console.log(files[0].generatedName);
        if (_.size(this.models1) >= 1) {
          // console.log(_.size(this.models1));

          let y = _.size(this.models1);
          let fd = [];
          for (let x = 0; x < y; x++) {
            let f = JSON.parse(this.models1[x].files);
            let f2 = f[x].generatedName;
            // console.log(f2);
          fd.push({fli:f2,subject:this.models1[x].subject,d_update:this.models1[x].d_update});

        }
        
        // console.log(fd);
        this.kkkk = fd;

          // console.log(JSON.parse(this.models1[0].files));
          // let xxx = JSON.parse(this.models1[0].files);
          // console.log(xxx[0].generatedName);
          // this.models1.push({ fff: xxx[0].generatedName });
          // let chartData = this.models1;
          // let data = [];
          // chartData.forEach(v => {
          //   data.push({ name: v.mname, y: +v.pricenow });
          // });

          this.xxxvdo = true;
        }
        // console.log(JSON.parse(this.models.files));
        // let files = JSON.parse(this.models[0].files);
        // console.log(files[0].generatedName);

        // this.filex = `http://164.115.22.73/p/pon-api/pccfile/pcc_${files[0].generatedName}`;
      });
  }
  xxxvdo: boolean = false;
  ngOnInit() {

  }

}
