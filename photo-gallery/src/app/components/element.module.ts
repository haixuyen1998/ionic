import {NgModule} from '@angular/core';
import {ElementComponent} from '../components/element/element.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
@NgModule({
    imports: [
        CommonModule,
        IonicModule
      ],
    declarations:[ElementComponent],
    exports:[ElementComponent]
})
export class ElementModule{}