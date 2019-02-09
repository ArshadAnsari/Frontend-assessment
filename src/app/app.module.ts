import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CommonService } from './services/common.service';

const rootRoute: Routes = [
  {path: '', redirectTo: 'movieList', pathMatch: 'full'},
  {
    path: 'movieList',
    loadChildren: './movieList/movieList.module#MovieListModule',
  },
  {
    path: 'movieDetail/:id',
    loadChildren: './movieDetail/movieDetail.module#MovieDetailModule',
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rootRoute),
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
