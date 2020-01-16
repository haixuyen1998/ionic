import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {DetailPagePage} from '../detail-page/detail-page.page';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  data: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public modalController: ModalController
    ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
      }
    });
   }

  ngOnInit() {
  }
  async openModal(){
    const modal = await this.modalController.create({
      component:DetailPagePage,
      componentProps: {
        'data': this.data,
      }
    });
    return await modal.present();
  }

}
