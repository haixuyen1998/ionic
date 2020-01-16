import {NgModule} from '@angular/core';
import {DetailPipe} from '../pipes/detail.pipe';
@NgModule({
    declarations:[DetailPipe],
    exports:[DetailPipe]
})
export class DetailModule{}