import { Component } from '@angular/core';
import { addBackToTop } from 'vanilla-back-to-top'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontClient';
  ngOnInit() {
    addBackToTop({
      backgroundColor : '#004e92',
      cornerOffset :  20, // px
      diameter : 56,
      id : 'back-to-top',
      innerHTML: '<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>',
      onClickScrollTo : 0, // px
      scrollContainer : document.body, // or a DOM element, e.g., document.getElementById('content')
      scrollDuration : 100, // ms
      showWhenScrollTopIs : 1,
      textColor : '#fff',
      zIndex : 1
    })
  }
}
