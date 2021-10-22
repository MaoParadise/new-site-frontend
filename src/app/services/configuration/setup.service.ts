import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  data: any;
  DOMINIE_URI: string = 'http://localhost:4210'
  //API_URI: string = 'http://ec2-13-57-39-224.us-west-1.compute.amazonaws.com:3000/api';
  API_URI: string = 'http://192.168.43.101:3000/api';

  bodyCredentials: any = {
    observe: 'body',
    withCredentials: true,
    headers: new HttpHeaders().append('Content-Type', 'application/json'),
    responseType: 'json'
  }

  constructor(
    private http: HttpClient
  ) {}

  getAPI_URI(){
    return this.API_URI;
  }

  getDOMINIE_URI(){
    return this.DOMINIE_URI;
  }
  
}
