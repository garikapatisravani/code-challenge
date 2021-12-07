import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsurancePlansService {

  constructor(private http: HttpClient) { }

  getInsurancePlans(){
    return this.http.get("http://localhost:8080/quotes");
  }
}
