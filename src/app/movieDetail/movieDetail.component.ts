import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './movieDetail.component.html',
  styleUrls: ['./movieDetail.component.css']
})
export class movieDetailComponent implements OnInit{

  private movieDetail = {};
  constructor(private _route: ActivatedRoute, private _router: Router, private _commonService: CommonService) {}

  ngOnInit() {
    this._route.queryParams.subscribe((params) => {
      this._commonService.getDetailMovieData(params.id).subscribe((_data) => {
        Object.assign(this.movieDetail, _data);
        console.log(_data);
      });
    });
  }

  onDeleteMovie() {
    this._commonService.deleteMovie(this.movieDetail["_id"]).subscribe(() => {
      console.log("Movie deleted")
    });
  }
}
