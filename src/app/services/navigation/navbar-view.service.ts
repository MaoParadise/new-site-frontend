import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarViewService {

  imgPresentation: string = 'assets/default/header/game-h.jpg';

  constructor() { }

  changeImgPresentation(section: number){
    if(section == 1){
      this.imgPresentation = 'assets/default/header/game-h.jpg'
    }
    else if(section == 2){
      this.imgPresentation = 'assets/default/header/tecno-h.jpg'
    }
    else if(section == 3){
      this.imgPresentation = 'assets/default/header/movie-h.jpg'
    }
    else{
      this.imgPresentation = 'assets/default/header/game-h.jpg'
    }
  }

}
