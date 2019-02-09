import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { movieDetailComponent } from './movieDetail.component';

const rootRoute: Routes = [
  {
    path: '',
    component: movieDetailComponent,
  }
];

@NgModule({
  declarations: [
    movieDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(rootRoute)
  ],
  providers: [],
})
export class MovieDetailModule { }
