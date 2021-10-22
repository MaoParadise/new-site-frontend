import { Component, OnInit } from '@angular/core';
import { ReleaseService } from 'src/app/services/release/release.service';
import { Router } from '@angular/router';
import { ReleaseViewService } from 'src/app/services/release/release-view.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  loadActivated: boolean = true;
  data: any;
  dataPush: any;
  releasesCommands = {
    start: 0,
    end: 9
  }

  constructor(
    private _release: ReleaseService,
    private _router: Router,
    public _releaseView: ReleaseViewService
  ) { }

  ngOnInit() {
    this.getReleases(
      this.releasesCommands.start,
      this.releasesCommands.end
      );
      this._releaseView.getOutStandingReleases();
  }

  getReleases(start: number, limit: number){
    this._release.getPublicReleases(start, limit)
    .subscribe(
      (res)=>{
        this.data = res;
      },
      (error)=>{
        console.log(error);
      }
    )
  } 

  getReleasesLoadMoar(start: number, limit: number) {
    if (this.loadActivated) {
      start = this.data.length;
      this._release.getPublicReleases(start, limit)
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


  returnTitle(option: string){
    option = option.replace(/ /g, "-");
    return option;
  }

}
