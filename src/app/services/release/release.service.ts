import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SetupService } from '../configuration/setup.service';

@Injectable({
  providedIn: 'root'
})
export class ReleaseService {

  API_URI: string = this._setup.getAPI_URI();

  constructor(
    private http: HttpClient,
    private _setup: SetupService
  ) { }


  getPublicReleases(start:number, limit:number){
    return this.http.post(`${this.API_URI}/release/getReleasesPublic`,
    {
      start,
      limit
    });
  }

  getPublicReleasesLike(like: string){
    return this.http.post(`${this.API_URI}/release/getReleasesPublicLike`,
    {
      like
    });
  }

  getPublicReleasesByType(start:number, limit:number, type:number){
    return this.http.post(`${this.API_URI}/release/getReleasesPublicByType`,
    {
      start,
      limit,
      type
    });
  }

  getPublicReleasesBySubSection(start:number, limit:number, like:string){
    return this.http.post(`${this.API_URI}/release/getReleasesPublicBySubSection`,
    {
      start,
      limit,
      like
    });
  }

  getPublicReleaseByID(id: number){
    return this.http.get(`${this.API_URI}/release/getReleasesPublicByID/${id}`);
  }


  getOutStandingReleases(){
    return this.http.get(`${this.API_URI}/release/getOutstandingReleases`);
  }

  getCouldBeInteresting(start:number, limit:number, like:any){
    return this.http.post(`${this.API_URI}/release/getCouldBeInteresting`,
    {
      start,
      limit,
      like
    });
  }


}
