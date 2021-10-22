import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  dominie: string = 'http://localhost:4210/';

  shareObj = {
    href: "http://localhost:4210/ver/25/Square-Enix-achicó-el-busto-de-Tifa-en-FF-VII-Remake-para-no-tener-problemas",
    hashtag:"notiloot"
  }

  constructor() { }


}
