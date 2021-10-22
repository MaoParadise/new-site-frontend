import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReleaseViewService } from 'src/app/services/release/release-view.service';
import { NavbarViewService } from 'src/app/services/navigation/navbar-view.service';

@Component({
  selector: 'app-navbar-sec',
  templateUrl: './navbar-sec.component.html',
  styleUrls: ['./navbar-sec.component.css']
})
export class NavbarSecComponent implements OnInit {


  constructor(
    public _releaseView: ReleaseViewService,
    public _navBarview: NavbarViewService
  ) { }

  ngOnInit() {
    
  }



}
