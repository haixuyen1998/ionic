import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.page.html',
  styleUrls: ['./title.page.scss'],
})
export class TitlePage implements OnInit {
  data: any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.data['special']) {
      this.data = this.route.snapshot.data['special'];
    }

  }
}
