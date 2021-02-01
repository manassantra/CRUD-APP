// adunit.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdUnit } from './components/index/AdUnit';

@Injectable({
  providedIn: 'root'
})
export class AdunitService {

  uri = 'http://localhost:4000/adunits';

  constructor(private http: HttpClient) { }

  addAdUnit(unit_name, unit_price, unit_dec, unit_qty) {
    const obj = {
          unit_name: unit_name,
          unit_price: unit_price,
          unit_dec: unit_dec,
          unit_qty: unit_qty
        };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getAdUnits() {
    return this
           .http
           .get(`${this.uri}`);
    }

    editAdUnit(id) {
      return this
                .http
                .get(`${this.uri}/edit/${id}`);
      }

    

updateAdUnit(unit_name, unit_price, unit_dec, unit_qty, id) {

  const obj = {
    unit_name: unit_name,
    unit_price: unit_price,
    unit_dec: unit_dec,
    unit_qty: unit_qty
  };
  this
    .http
    .post(`${this.uri}/update/${id}`, obj)
    .subscribe(res => console.log('Done'));
}

      deleteAdUnit(id) {
        return this
                  .http
                  .get(`${this.uri}/delete/${id}`);
    }

}

