import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // paises: any[] = [];

  //  Injeccion
  // constructor( private http: HttpClient){

  //   console.log('Constructor del Home');
  //   this.http.get('https://restcountries.com/v3.1/lang/spa').subscribe( (resp:any) => {
  //     this.paises = resp;
  //       console.log(resp);
  //   })
  // }

  constructor(private spotify: SpotifyService){
    this.spotify.getNewRealeases();
  }


}
