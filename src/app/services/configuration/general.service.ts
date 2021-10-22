import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  validateSpecialChar(text){
    let out: boolean = true;
    var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890_-';

    for (var i=0; i<text.length; i++){
      if(out){
       if (!(filtro.indexOf(text.charAt(i)) > -1)) {
        out = false;
       }
      }
    }
    return out;
  }



  separateAndReplaceAndMinus(sentence: string){
    return sentence.toLocaleUpperCase().replace(/ /g, "").split(';');
  }

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }


}
