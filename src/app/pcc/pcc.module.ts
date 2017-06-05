import { PccChannelComponent } from './pview/pcc-channel/pcc-channel.component';
import { ItemModule } from './item/item.module';
import { PSharedModule } from './../p-shared/p-module/p-shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'pccchannel', component: PccChannelComponent,
        children: [
            { path: 'pccchannel', component: PccChannelComponent },
            // { path: 'main', component: VMainComponent },
            // { path: 'in', component: VInComponent },
            // { path: 'out', component: VOutComponent }
        ]
    },
    { path: '', redirectTo: 'pccchannel', pathMatch: 'full' },
    { path: '**', redirectTo: 'pccchannel', pathMatch: 'full' },
];



@NgModule({
    imports: [
        CommonModule,
        PSharedModule,
        ItemModule,
        PSharedModule.forRoot(),
    ],
    declarations: [
        PccChannelComponent
    ]
})
export class PccModule { } 