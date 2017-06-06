import { Pcmodel } from './../../../pcc-model';
import { PSharedComponent } from './../../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import swal from 'sweetalert2';
@Component({
  selector: 'app-item-pcc-cform',
  templateUrl: './item-pcc-cform.component.html',
  styleUrls: ['./item-pcc-cform.component.css']
})
export class ItemPccCformComponent extends PSharedComponent implements OnInit {

  model = new Pcmodel();

  ngOnInit() {
    this.updateId = 0;
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
    this.objPayload = JSON.parse(this._pLoginService.atou(localStorage.getItem('tokenPayload')));
    // console.log(this.model);
    // console.log(this.updateId);
    if (this.ckfile == true) {
      this.model.files = JSON.stringify(this.pccfile);
    }
    this.model.cid = this.objPayload.CID;
    this.model.hcode = this.objPayload.HOSPCODE;
    this.model.hname = this.objPayload.HOSPNAME;
    this.model.fullname = `${this.objPayload.PRENAME}${this.objPayload.NAME}' '${this.objPayload.LASTNAME}`;
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
