import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private readonly Base_URL = 'http://localhost:9000';

  constructor(private myClient:HttpClient) { 

  }

  getOrderDetails(id:any){
    return this.myClient.get(`${this.Base_URL}/checkout/${id}`)
  }
  checkout(id:any,data:any){
    return this.myClient.post(`${this.Base_URL}/checkout/${id}`,data)
  }
}