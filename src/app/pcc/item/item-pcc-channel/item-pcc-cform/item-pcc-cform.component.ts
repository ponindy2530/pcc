import { Pcmodel } from './../../../pcc-model';
import { PSharedComponent } from './../../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import swal from 'sweetalert2';
@Component({
  selector: 'app-item-pcc-cform',
  templateUrl: './item-pcc-cform.component.html',
  styleUrls: ['./item-pcc-cform.component.css']
})
export class ItemPccCformComponent extends PSharedComponent implements OnInit, OnChanges {

  @Input() editDataForm: Pcmodel;
  ngOnChanges(): void {
    console.log(this.editDataForm.id);

    if (this.editDataForm.id) {
      this.model = this.editDataForm;
      // this.pccfile = this.editDataForm.files;
    }
  }

  model = new Pcmodel();
  url: string = "http://164.115.22.73/p/pon-api/uploadpccfile.php";
  // url: string = "http://127.0.0.1/p/pon-api/uploadpccfile.php";
  ngOnInit() {
    this.getData(6);
    this.objPayload1 = JSON.parse(localStorage.getItem('tokenPayload1'));
    this.model.groups = this.objPayload1[0].groups;

  }

  getData(apiKey) {


    this._pSharedService.apiData(apiKey)
      .subscribe(res => this.models = res,
      err => console.log(err),
      () => {
        // console.log(this.models);
      });
  }




  uploadedFiles: any[] = [];
  pccfile: any[] = [];
  ckfile: boolean = false;
  onUpload(event) {
    this.pccfile.push(JSON.parse(event.xhr.response));
    // console.log(this.pccfile);
    this.ckfile = true;
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    // console.log(event);


    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }


  resform() {
    this.updateId = 0;
    this.uploadedFiles = [];
    this.model = new Pcmodel();
    this.gotolist();
  }

  @Output() gtolist = new EventEmitter()

  gotolist() {
    this.gtolist.emit(3);
  }

  save() {
    this.objPayload1 = JSON.parse(localStorage.getItem('tokenPayload1'));
    // console.log(this.model);
    // console.log(this.updateId);
    if (this.ckfile == true) {
      this.model.files = JSON.stringify(this.pccfile);
    }
    // console.log(this.objPayload1[0].usernames);
    // console.log(this.objPayload1[0].id);
    this.model.usernames = this.objPayload1[0].id;
    // this.model.hcode = this.objPayload.HOSPCODE;
    // this.model.hname = this.objPayload.HOSPNAME;
    // this.model.fullname = `${this.objPayload.PRENAME}${this.objPayload.NAME}' '${this.objPayload.LASTNAME}`;
    this.model.fullname = this.objPayload1[0].fullname;
    // this.model.cid = this.objPayload.CID;
    this.model.hcode = this.objPayload1[0].hcode;
    // this.model.hname = this.objPayload.HOSPNAME;
    // this.model.fullname = `${this.objPayload.PRENAME}${this.objPayload.NAME}' '${this.objPayload.LASTNAME}`;
    if (this.editDataForm.id) {
      this.updateId = this.editDataForm.id;
    } else {
      this.updateId = 0;
    }

    this.model.st = 1;
    this.pd = this.model;
    console.log(this.pd);
    this._pSharedService.addData('pcc_channel', 'id', this.updateId, this.pd)
      .subscribe(resproducts => this.addmodel = resproducts,
      err => console.log(err),
      () => {
        swal(
          'ระบบทำการบันทึก!',
          'ข้อมูลเรียบร้อยแล้ว',
          'success'
        );
        this.resform();
      }
      );
  }

}
