import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './movieList.component.html',
  styleUrls: ['./movieList.component.css']
})
export class MovieListComponent implements OnInit{

  private movieData = [];
  constructor(private _router: Router, private _commonService: CommonService) {}

  ngOnInit() {
    this._commonService.getMovieData().subscribe((_data) => {
      console.log(_data);
      this.movieData = _data;
    });
  }

  onMovieSelect(_slug, _id): void {
    this._router.navigate(['movieDetail', _slug], {queryParams: { id: _id}});
  }

}
