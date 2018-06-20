import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'http://ua/drively/sites/_public/schedule/jsonexp.php';	
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  getPassengers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'?driver=3&date=2018-06-18').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  nextTrip(data) {
    return new Promise((resolve, reject) => {
    var v = JSON.stringify(data);
      this.http.post(this.apiUrl, v)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}


