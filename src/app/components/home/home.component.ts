import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService ) {

    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases().subscribe((data:any) =>{
      /*console.log(data);*/
      this.nuevasCanciones = data;
      this.loading = false;
    },( errorServicio )=> {
      this.error = true;
      this.loading=false;
      console.log(errorServicio);
      this.mensajeError=errorServicio.error.error.message;
    }
    
    );

  }

  ngOnInit(): void {
  }

}

/*

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises: any[] = [];

  constructor( private http: HttpClient) { 

    console.log('Constructor del Home hecho');
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (resp: any) => {
      this.paises = resp;
      console.log(resp);
    });

  }

  ngOnInit(): void {
  }

}
*/