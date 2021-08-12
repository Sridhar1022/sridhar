import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map"
import { CommonConstants } from "app/CommonConstants";

@Injectable()
export class MoviesService {


    constructor(private http: Http) {

    }

    public SearchMovie(searchKey: string, searchType: string) {         
        var url: string = 'https://www.omdbapi.com/?apikey=92087764&s=';
       // url = url.replace('https://www.omdbapi.com/?apikey=${this.API_KEY}', 'searchType');
        return this.http.get(url + searchKey)
            .map(result => result.json());
    }
    public SearchMovieDetails(searchKey: string, searchType: string) {         
        var url: string = 'https://www.omdbapi.com/?apikey=92087764&i=';
       // url = url.replace('https://www.omdbapi.com/?apikey=${this.API_KEY}', 'searchType');
        return this.http.get(url + searchKey)
            .map(result => result.json());
    }
}
