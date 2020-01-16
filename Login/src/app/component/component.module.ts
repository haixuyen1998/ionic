import {NgModule} from '@angular/core';
import {ExampleComponent} from '../component/example/example.component';
@NgModule({
    declarations:[ExampleComponent],
    exports:[ExampleComponent]
})
export class ComponentModule{}