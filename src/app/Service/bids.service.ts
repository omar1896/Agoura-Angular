import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BidsService {

  private readonly Base_URL = "http://localhost:3000";
  constructor(private myClient:HttpClient) {

  }
  GetBidById(id:any){
    return this.myClient.get(this.Base_URL+`/place/${id}`)
  }
}