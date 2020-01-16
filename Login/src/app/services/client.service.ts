import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseURl='https://sandbox.gotoally.com/api/v1/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'true',
      'Authorization':localStorage.getItem("name")
      })
    }
  constructor(public http:HttpClient,private dataService: DataService) { }
  getDeitail(page=1){
    return this.http.get(`${this.baseURl}users/auto_complete?count=20&page=${page}`,this.httpOptions).pipe(
      map(result=>{
        return result['matches'];
      })
    )
  }
  findDetail(search){
    return this.http.get(`${this.baseURl}users/auto_complete/${search}`,this.httpOptions);
  }
 
}