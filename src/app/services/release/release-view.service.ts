import { Injectable } from '@angular/core';
import { ReleaseService } from './release.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReleaseViewService {

  DOMINIE_URI: string = 'http://192.168.43.101';
  loadActivated: boolean = true;
  data: any;
  dataPush: any;
  dataOutStanding: any;
  releasesCommands = {
    start: 0,
    end: 9,
    type: 0
  }


  showDropDown = false;
  dissapearDropDown:number = 0;
  ngLike: string = '';
  dataLike: any;


  constructor(
    private _release: ReleaseService,
    private _router: Router
  ) { }


  getReleases(start: number, limit: number, type: number){
    this.loadActivated = true;
    this._release.getPublicReleasesByType(start, limit, type)
    .subscribe(
      (res)=>{
        this.data = res;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  getSubSection(start: number, limit: number, like: string){
    this.loadActivated = true;
    this._release.getPublicReleasesBySubSection(start, limit, like)
    .subscribe(
      (res)=>{
        this.data = res;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  getOutStandingReleases(){
    this._release.getOutStandingReleases().subscribe(
      (res)=>{
        this.dataOutStanding = res;
      },
      (err)=>{
        console.log('error');
      }
    )
  }

  getReleasesLoadMoar(start: number, limit: number, type: number) {
    if (this.loadActivated) {
      start = this.data.length;
      this._release.getPublicReleasesByType(start, limit, type)
        .subscribe(
          (res) => {
            this.dataPush = res;
            for (let i = 0, length = this.dataPush.length; i < length; i++) {
              this.data.push(this.dataPush[i]);
            }
            if (this.dataPush.length <= 0) {
              this.loadActivated = false;
            }
          },
          (error) => {
            console.log(error);
          }
        )
    }

  } 


  getReleasesLoadMoarSubSection(start: number, limit: number, like: string) {
    if (this.loadActivated) {
      start = this.data.length;
      this._release.getPublicReleasesBySubSection(start, limit, like)
        .subscribe(
          (res) => {
            this.dataPush = res;
            for (let i = 0, length = this.dataPush.length; i < length; i++) {
              this.data.push(this.dataPush[i]);
            }
            if (this.dataPush.length <= 0) {
              this.loadActivated = false;
            }
          },
          (error) => {
            console.log(error);
          }
        )
    }

  } 

  redirectToNews(id: number, option: string) {
    option = option.replace(/ /g, "-")
    let url = this._router.createUrlTree(['/ver', id, option])
    window.open(url.toString(), '_blank')
  }

  test(Valor: number){
    console.log('adsasdd', Valor)
  }

  returnTitle(option: string){
    option = option.replace(/ /g, "-");
    return option;
  }



  onChangeSearch(){
    if(this.ngLike.length > 2){
      this._release.getPublicReleasesLike(this.ngLike)
      .subscribe(
        (res)=>{
          this.dataLike = res;
        },
        (err)=>{
          console.log(err);
        }
      )
    }else{
      this.dataLike = null;
    }
  } 

  toggleDropDown(){
    this.showDropDown = !this.showDropDown;
    if(this.showDropDown == false){
      this.dissapearDropDown = 0;
    }
  }

  onClickedOutside() {
    this.dissapearDropDown++;
    if(this.dissapearDropDown > 1){
      this.showDropDown = !this.showDropDown;
      this.dissapearDropDown = 0;
    }
  }



}
