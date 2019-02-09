import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CommonService {

    private movieData = [];
    private _behaviorSubject: BehaviorSubject<any> = new BehaviorSubject(this.movieData);
    private readonly dataObservable: Observable<any> = this._behaviorSubject.asObservable();

    constructor (private http: HttpClient) {

        this.http.get("https://backend-ygzsyibiue.now.sh/api/v1/movies/", {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        }).subscribe((response) => {
            Object.assign(this.movieData, response);
            this._behaviorSubject.next(this.movieData);
        });

        /*this.http.post("https://backend-ygzsyibiue.now.sh/api/v1/movies/", {
            backdropURL: "/m03jul0YdVEOFXEQVUv6pOVQYGL.jpg",
            plot: "Dracula, Mavis, Johnny and the rest of the Drac Pack take a vacation on a luxury Monster Cruise Ship, where Dracula falls in love with the ship's captain, Ericka, who's secretly a descendant of Abraham Van Helsing, the notorious monster slayer.",
            posterURL: "/gjAFM4xhA5vyLxxKMz38ujlUfDL.jpg",
            releaseDate: "2018-06-30T00:00:00.000Z",
            // slug: "Hotel-Transylvania-4:-Summer-Vacation",
            title: "Hotel Transylvania 4: Summer Vacation",
            // __v: 0,
            // _id: "5ba206af0ac8800b7fd503dd"
        },{
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        }).subscribe((response) => {
            console.log("This is Post",  response)
        });*/
    }

    getMovieData() {
        return this.dataObservable;
    }

    getDetailMovieData(_id) {
        return this.http.get("https://backend-ygzsyibiue.now.sh/api/v1/movies/"+_id, {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        });
    }

    deleteMovie(_id) {
        return this.http.delete("https://backend-ygzsyibiue.now.sh/api/v1/movies/"+_id);
    }
}