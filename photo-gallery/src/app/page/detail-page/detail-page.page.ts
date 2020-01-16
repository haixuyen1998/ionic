import { Component, OnInit,Input } from '@angular/core';
import { NavParams,ModalController } from '@ionic/angular';
@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.page.html',
  styleUrls: ['./detail-page.page.scss'],
})
export class DetailPagePage implements OnInit {

  ngOnInit() {
  }
  @Input() firstName: string;
  data:any=[];
  constructor(public navParams: NavParams,public modalController: ModalController) {
    // componentProps can also be accessed at construction time using NavParams
    this.data=navParams.get('data');
    console.log(this.data);
  }
  close(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  
}
