import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
  private baseURl='https://sandbox.gotoally.com/api/v1/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'true',
      'Authorization':localStorage.getItem("auth-token")
      })
    }
  constructor(public http:HttpClient) { }
  getList(page=1){
    return this.http.get(`${this.baseURl}users/auto_complete?count=20&page=${page}`,this.httpOptions).pipe(
      map(result=>{
        return result['matches'];
      })
    )}
  handError(err){
    if(err.error instanceof Error){
      console.log(`client-side error:${err.error.message}`);
    }else{
      console.log(`server-side error:${err.status}-${err.error}`);
    }
  }
}
