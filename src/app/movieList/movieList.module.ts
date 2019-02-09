import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './movieList.component';

const rootRoute: Routes = [
  {
    path: '',
    component: MovieListComponent,
  }
];

@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(rootRoute)
  ],
  providers: [],
})
export class MovieListModule { }
