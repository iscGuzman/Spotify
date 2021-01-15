import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify service ready');
  }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${ query }`;
    const token = 'BQB2TAz8-NRpQrPOTqJRIAx-hj1jAdC85NZCTDAzcLraK6gRTqNYfIjtpUZr1I7pNaDxsr9AdUTX-5OOdYw';
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+ token});
      
    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=50')
    .pipe( map( data => data['albums'].items));
  }

  getArtistas( termino: string){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
    .pipe( map( data => data['artists'].items));
  }

  getArtista( id: string){

    return this.getQuery(`artists/${id}`)
    //.pipe( map( data => data['artists'].items));
  }

  getTopTracks( id: string){

    return this.getQuery(`artists/${id}/top-tracks?country=mx`)
    .pipe( map( data => data['tracks']));
  }

}
