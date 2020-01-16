import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';
import {DetailModule} from '../../pipe/detail.module';
import { DetailPage } from './detail.page';
import {DetailPagePage} from '../detail-page/detail-page.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailModule,
    DetailPageRoutingModule
  ],
  declarations: [DetailPage,DetailPagePage],
  entryComponents:[DetailPagePage]
})
export class DetailPageModule {}
