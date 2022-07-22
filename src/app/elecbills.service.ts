import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Elecbill } from './elecbill';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElecbillsService {

  private baseURL = "http://localhost:8084/elec";

  constructor(private httpClient: HttpClient) { }
  getElecbillList(): Observable<Elecbill[]>{
    return this.httpClient.get<Elecbill[]>(`${this.baseURL}`);
  }

  createbill(elecbill: Elecbill): Observable<Object>{
    return this.httpClient.post(`http://localhost:8084/elec/addbill`, elecbill);
  }

  getBillById(electId: number): Observable<Elecbill>{
    return this.httpClient.get<Elecbill>(`http://localhost:8084/elec/get/${electId}`);
  }

  deleteBill(electId: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8084/elec/delete/${electId}`);
  }

  
}
