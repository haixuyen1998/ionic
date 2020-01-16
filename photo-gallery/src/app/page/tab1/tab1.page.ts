import { Component, OnInit} from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {ListServiceService} from '../../services/list-service.service';
import {PopoverController} from '@ionic/angular';
import { LogoutPopoverComponent } from 'src/app/components/logout-popover/logout-popover.component';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  users=[];
  page=1;
  maximumPages=3;
  public idName:string;
  constructor(private listService:ListServiceService,
              private router: Router,
              private popoverController:PopoverController) {}
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers(event?){
    this.listService.getList(this.page).subscribe(res=>{
      console.log(res);
      this.users=this.users.concat(res);
      if(event){
        event.target.complete();
      }
    });
  }
  loadMore(event){
    console.log(event);
    this.page++;
    this.loadUsers(event);
      setTimeout(() => {
        event.target.complete();
        if (this.page===this.maximumPages) {
          event.target.disabled = true;
        }
      },500);
  }
  openDetailsWithState(u){
    let navigationExtras: NavigationExtras = {
      state: {
        user: u
      }
    };
    this.router.navigate(['/tabs/tab1/detail'], navigationExtras);
  }
  onChangeInput(ev: any){
  }
  async presentPopover(ev: any){
    const popover=await this.popoverController.create({
      component:LogoutPopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
