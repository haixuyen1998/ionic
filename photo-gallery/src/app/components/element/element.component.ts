import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss'],
})
export class ElementComponent implements OnInit {
  @Input('name') name:any[]=[];
  @Input('email') email:any[]=[];
  @Input('img') img:any[]=[];
  constructor() { }
  ngOnInit() {
    
  }
}
