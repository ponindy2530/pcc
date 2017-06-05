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


const routes: Routes = [
  { path: '', redirectTo: '/pccchannel', pathMatch: 'full' },
  { path: 'pccchannel', component: PccChannelComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    PccChannelComponent
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
