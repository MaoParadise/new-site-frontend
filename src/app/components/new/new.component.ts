import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReleaseService } from 'src/app/services/release/release.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as moment from 'moment';
import { SocialMediaService } from 'src/app/services/social-media/social-media.service';
import { SocialService } from 'ngx-social-button';
import { SetupService } from 'src/app/services/configuration/setup.service';
import { GeneralService } from 'src/app/services/configuration/general.service';
import { ReleaseViewService } from 'src/app/services/release/release-view.service';
import { NavbarViewService } from 'src/app/services/navigation/navbar-view.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {


  shareObj = {
    href: "https://siimonbaz.tumblr.com",
    hashtag:"notiloot"
  }

  data: any;
  dataCouldbe: any;
  dataNoCouldbe: any;
  option: any ={
    id: 0,
    title: ''
  };
  safeHtml: SafeHtml;
  SubSectionProcessed: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _release: ReleaseService,
    private sanitizer: DomSanitizer,
    private socialAuthService: SocialService,
    public _socialMedia: SocialMediaService,
    private _setup: SetupService,
    private _general: GeneralService,
    public _releaseView: ReleaseViewService,
    public _navbarView: NavbarViewService
  ) { }

  ngOnInit() {
    this.takeParamateres();
    this.getReleasesByID();
    moment.locale('es');
    this.shareObj.href = this._setup.getDOMINIE_URI()+'/ver/'+this.option.id+'/'+this.option.title;
    
  }

  takeParamateres(){
    this.option = {
      id: this.activatedRoute.snapshot.params.id,
      title: this.activatedRoute.snapshot.params.option
    };
  }

  getReleasesByID(){
    this._release.getPublicReleaseByID(this.option.id)
    .subscribe(
      (res)=>{
        this.data = res;  
        this.SubSectionProcessed = this._general.separateAndReplaceAndMinus(this.data[0].SUBSECTION);
        this.getCouldBeInteresting();
        this._navbarView.changeImgPresentation(this.data[0].IDSECTION);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  getCouldBeInteresting(){
    this._release.getCouldBeInteresting(0,7,this.SubSectionProcessed)
    .subscribe(
      (res)=>{
        this.dataCouldbe = res;
        for(let i = 0; i < this.dataCouldbe.length; i++){
          if(this.dataCouldbe[i].IDRELEASE == this.data[0].IDRELEASE){
            this.dataCouldbe.splice(i, 1);
          }
        }
        if(this.dataCouldbe.length < 6){
          this.getReleases(0, 6-this.dataCouldbe.length);
        }
        
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  onSafeHtml(html: string){
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  public facebookSharing(shareObj: any){
    this.socialAuthService.facebookSharing(shareObj);
  }

  getReleases(start: number, limit: number){
    this._release.getPublicReleases(start, limit)
    .subscribe(
      (res)=>{
        this.dataNoCouldbe = res;
      },
      (error)=>{
        console.log(error);
      }
    )
  } 

}
