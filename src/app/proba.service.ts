import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProbaService {

  constructor(private http: HttpClient) {
  }

  dailyForecast() {

    return this.http.get('http://localhost:8080/grafikon').pipe(map((result: any) => result));

  }
}

