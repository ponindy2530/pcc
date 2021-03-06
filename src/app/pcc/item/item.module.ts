import { CSlideOutComponent } from './c-manu/c-slide-out/c-slide-out.component';
import { PSharedModule } from './../../p-shared/p-module/p-shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItemPccCformComponent } from './item-pcc-channel/item-pcc-cform/item-pcc-cform.component';
import { ItemListvdoComponent } from './item-pcc-channel/item-listvdo/item-listvdo.component';
import { ItemPccImgformComponent } from './item-pcc-channel/item-pcc-imgform/item-pcc-imgform.component';
import { ItemPccDetailComponent } from './item-pcc-channel/item-pcc-detail/item-pcc-detail.component';
import { CLoginComponent } from './c-manu/c-login/c-login.component';
import { PccHomelistComponent } from './c-home/pcc-homelist/pcc-homelist.component';
import { ListpccComponent } from './listpcc/listpcc.component';
import { ShowhomevdoComponent } from './showhomevdo/showhomevdo.component';
import { Showhomevdo2Component } from './showhomevdo/showhomevdo2.component';
import { ShowimgComponent } from './showimg/showimg.component';
import { ConferenceComponent } from './conference/conference.component';






@NgModule({
    imports: [
        CommonModule,
        PSharedModule
    ],
    declarations: [
        CSlideOutComponent,
        ItemPccCformComponent,
        ItemListvdoComponent,
        ItemPccImgformComponent,
        ItemPccDetailComponent,
        CLoginComponent,
        PccHomelistComponent,
        ListpccComponent,
        ShowhomevdoComponent,
        Showhomevdo2Component,
        ShowimgComponent,
        ConferenceComponent
    ],
    exports: [
        CSlideOutComponent,
        ItemPccCformComponent,
        ItemListvdoComponent,
        ItemPccImgformComponent,
        ItemPccDetailComponent,
        CLoginComponent,
        PccHomelistComponent,
        ListpccComponent,
        ShowhomevdoComponent,
        Showhomevdo2Component,
        ShowimgComponent,
        ConferenceComponent
    ]
})
export class ItemModule { } 