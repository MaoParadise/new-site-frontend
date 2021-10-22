import { Component, OnInit } from '@angular/core';
import { ReleaseViewService } from 'src/app/services/release/release-view.service';

@Component({
  selector: 'app-navbar-pri',
  templateUrl: './navbar-pri.component.html',
  styleUrls: ['./navbar-pri.component.css']
})
export class NavbarPriComponent implements OnInit {


  constructor(
    public _releaseView: ReleaseViewService
  ) { }

  ngOnInit() {
  }

}
