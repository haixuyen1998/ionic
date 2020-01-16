import { IonicModule } from '@ionic/angular';
import { RouterModule,Routes, } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import {ElementModule} from '../../components/element.module';
import {DetailModule} from '../../pipe/detail.module';
import {LogoutPopoverComponent } from 'src/app/components/logout-popover/logout-popover.component';
const routes: Routes = [
  {
    path: '',
    component:  Tab1Page,
  }
]; 
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ElementModule,
    DetailModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[LogoutPopoverComponent],
  declarations: [Tab1Page,LogoutPopoverComponent]
})
export class Tab1PageModule {}
