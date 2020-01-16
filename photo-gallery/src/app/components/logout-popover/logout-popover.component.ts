import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular'
import { Router } from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service'
@Component({
  selector: 'app-logout-popover',
  templateUrl: './logout-popover.component.html',
  styleUrls: ['./logout-popover.component.scss'],
})
export class LogoutPopoverComponent implements OnInit {

  constructor(public popoverController:PopoverController,
              private router:Router,
              private authService: AuthenticationService) { }

  ngOnInit() {}
  logout(){
    this.authService.logout();
    this.popoverController.dismiss();
  }
}
