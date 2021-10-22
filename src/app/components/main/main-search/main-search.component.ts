import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReleaseViewService } from 'src/app/services/release/release-view.service';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css']
})
export class MainSearchComponent implements OnInit {

  subsection: string = '';

  constructor(
    public activatedRoute: ActivatedRoute,
    public _releaseView: ReleaseViewService
  ) { }

  ngOnInit() {
    this.subsection = this.activatedRoute.snapshot.params.like;

    this._releaseView.getSubSection(
      this._releaseView.releasesCommands.start,
      this._releaseView.releasesCommands.end,
      this.activatedRoute.snapshot.params.like
    )
    this._releaseView.getOutStandingReleases();
  }


}
