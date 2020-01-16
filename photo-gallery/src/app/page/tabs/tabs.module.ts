import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from './tabs.router.module';
import { TabsPage } from './tabs.page';
import {ElementModule} from '../../components/element.module';
import { DetailPageModule } from '../detail/detail.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ElementModule,
    TabsPageRoutingModule,
    DetailPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
