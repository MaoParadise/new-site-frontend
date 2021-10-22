import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NewComponent } from './components/new/new.component';
import { MainNewComponent } from './components/main/main-new/main-new.component';
import { MainSearchComponent } from './components/main/main-search/main-search.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'ver/:id/:option',
    component: NewComponent
  },
  {
    path: ':option',
    component: MainNewComponent
  },
  {
    path: 'find/:like',
    component: MainSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
