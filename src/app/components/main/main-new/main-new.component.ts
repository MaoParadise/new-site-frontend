import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReleaseViewService } from 'src/app/services/release/release-view.service';

@Component({
  selector: 'app-main-new',
  templateUrl: './main-new.component.html',
  styleUrls: ['./main-new.component.css']
})
export class MainNewComponent implements OnInit {

  
  constructor(
    public activatedRoute: ActivatedRoute,
    public _releaseView: ReleaseViewService
  ) { }

  ngOnInit() {
    if(this.activatedRoute.snapshot.params.option == 'news'){
      this._releaseView.releasesCommands.type = 10;
    }else if(this.activatedRoute.snapshot.params.option == 'article'){
      this._releaseView.releasesCommands.type = 11;
    }else if(this.activatedRoute.snapshot.params.option == 'reviews'){
      this._releaseView.releasesCommands.type = 12;
    }
    this._releaseView.getReleases(
      this._releaseView.releasesCommands.start,
      this._releaseView.releasesCommands.end,
      this._releaseView.releasesCommands.type
    )
    this._releaseView.getOutStandingReleases();
  }

  

  


  

}
