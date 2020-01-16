import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {ClientService} from '../../services/client.service';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  users=[];
  name:string;
  page=1;
  maximumPages=3;
  public idName:string;
  constructor(private http:HttpClient,private detailService:ClientService,private router: Router,private dataService: DataService) { 
  }
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers(event?){
    this.detailService.getDeitail(this.page).subscribe(res=>{
      console.log(res);
      this.users=[...this.users,...res];
      if(event){
        event.target.complete();
      }
    },error=>{
      console.log(error);
    });
  }
  loadData(event){
    console.log(event);
    this.page++;
    this.loadUsers(event);
    if(this.page===this.maximumPages){
      event.target.disabled=true;
    }
  }
  onChangeInput(ev: any){
    let val = ev.target.value;
  }
  goToDetail(user) {
    this.dataService.setData(user.id,user);
    this.router.navigateByUrl(`/detail/${user.id}`, );
  }
}
