import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import * as _ from "lodash";
declare var jQuery: any;
@Component({
  selector: 'app-showimg',
  templateUrl: './showimg.component.html',
  styleUrls: ['./showimg.component.css']
})
export class ShowimgComponent extends PSharedComponent implements OnInit, OnChanges {

  @Input() apiKey: number;
  ngOnChanges(): void {
    this._pSharedService.apiData(this.apiKey)
      .subscribe(res => this.models1 = res,
      err => console.log(err),
      () => {
         console.log(_.size(this.models1));

        // console.log(JSON.parse(this.models1[0].files));
        // let files = JSON.parse(this.models1[0].files);
        // console.log(files[0].generatedName);
        if (_.size(this.models1) >= 1) {
          this.xxxvdo = true;
          // console.log(_.size(this.models1));
console.log(this.models1);

          let y = _.size(this.models1);
          let fd = [];
          for (let x = 0; x < y; x++) {
            // console.log(x);
            
            let f = JSON.parse(this.models1[x].files);
            // console.log(f);
            
            let f2 = f[0].generatedName;
            // console.log(f2);
            let ggg = `http://164.115.22.73/p/pon-api/pccfile/pcc_${f2}`;
            fd.push({ source: ggg, alt: this.models1[x].d_update, title: this.models1[x].subject,cup:this.models1[x].groups,article:this.models1[x].article });

          }

          // console.log(fd);

          this.kkkk = fd;

          // console.log(kkkk[0].source);

          // console.log(JSON.parse(this.models1[0].files));
          // let xxx = JSON.parse(this.models1[0].files);
          // console.log(xxx[0].generatedName);
          // this.models1.push({ fff: xxx[0].generatedName });
          // let chartData = this.models1;
          // let data = [];
          // chartData.forEach(v => {
          //   data.push({ name: v.mname, y: +v.pricenow });
          // });


        }
        // console.log(JSON.parse(this.models.files));
        // let files = JSON.parse(this.models[0].files);
        // console.log(files[0].generatedName);

        // this.filex = `http://164.115.22.73/p/pon-api/pccfile/pcc_${files[0].generatedName}`;
      });
  }
  // images: any[];
  kkkk: any;
  xxxvdo: boolean = false;
  ngOnInit() {
    jQuery('.slider').slider();
    this.xxxvdo = false;

  }


}
