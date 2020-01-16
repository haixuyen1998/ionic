import {NgModule} from '@angular/core';
import {DetailPipe} from './detail.pipe';
@NgModule({
    declarations:[DetailPipe],
    exports:[DetailPipe]
})
export class DetailModule{}