import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


/* External Modules */
import { InfiniteScrollModule } from 'ngx-infinite-scroll'; 
import { MomentModule } from 'ngx-moment';
import { NgxSocialButtonModule, SocialServiceConfig } from "ngx-social-button";
import { ClickOutsideModule } from 'ng4-click-outside';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NewComponent } from './components/new/new.component';
import { NavbarPriComponent } from './components/navbar/navbar-pri/navbar-pri.component';
import { NavbarSecComponent } from './components/navbar/navbar-sec/navbar-sec.component';
import { MainNewComponent } from './components/main/main-new/main-new.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainSearchComponent } from './components/main/main-search/main-search.component';

export function getAuthServiceConfigs() {
  let config = new SocialServiceConfig()
      .addFacebook("474155640048426")
      .addGoogle("Your-Google-Client-Id")
      .addLinkedIn("Your-LinkedIn-Client-Id");
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewComponent,
    NavbarPriComponent,
    NavbarSecComponent,
    MainNewComponent,
    FooterComponent,
    MainSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm' : 59
      }
    }),
    NgxSocialButtonModule,
    ClickOutsideModule
  ],
  providers: [
    {
      provide: SocialServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
