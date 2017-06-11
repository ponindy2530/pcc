import { PSharedModule } from './p-shared/p-module/p-shared.module';
import { ItemModule } from './pcc/item/item.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PccChannelComponent } from './pcc/pview/pcc-channel/pcc-channel.component';
import { LoginComponent } from './pcc/pview/login/login.component';
import { PccHomeComponent } from './pcc/pview/pcc-home/pcc-home.component';
import { Pcc1Component } from './pcc/pview/pcc1/pcc1.component';
import { Pcc2Component } from './pcc/pview/pcc2/pcc2.component';
import { Pcc3Component } from './pcc/pview/pcc3/pcc3.component';
import { PccNbcComponent } from './pcc/pview/pcc-nbc/pcc-nbc.component';
import { PccArjComponent } from './pcc/pview/pcc-arj/pcc-arj.component';
import { PccKmComponent } from './pcc/pview/pcc-km/pcc-km.component';
import { LoginNewComponent } from './pcc/pview/login-new/login-new.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'pccchannel', component: PccChannelComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginnew', component: LoginNewComponent },
  { path: 'home', component: PccHomeComponent },
  { path: 'pcc1', component: Pcc1Component },
  { path: 'pcc2', component: Pcc2Component },
  { path: 'pcc3', component: Pcc3Component },
  { path: 'pccnbc', component: PccNbcComponent },
  { path: 'pccarj', component: PccArjComponent },
  { path: 'pcckm', component: PccKmComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    PccChannelComponent,
    LoginComponent,
    PccHomeComponent,
    Pcc1Component,
    Pcc2Component,
    Pcc3Component,
    PccNbcComponent,
    PccArjComponent,
    PccKmComponent,
    LoginNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ItemModule,
    PSharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
