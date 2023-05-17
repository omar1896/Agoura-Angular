import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  private apiUrl = 'http://localhost:3000/api'; // Update the base URL

  constructor(private http: HttpClient) {}

  verifyOTP(otp: string) {
    return this.http.post<{ resetToken: string }>(`${this.apiUrl}/verifyOTP`, { otp });
  }
}
