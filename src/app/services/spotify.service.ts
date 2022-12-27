import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log('Spotify Service Listo');
    
  }

  getNewRealeases() {
// PONIENDO EL TOKEN GENERADO
    const headers= new HttpHeaders({
      'Authorization': 'Bearer BQBiSm3vcv3nvqeZ9FljtYIy0mo_3sXKOQ0JVFqXUJVzWE8DtKPNyeB4JmSv1swbmIyJeALcL_5b1pxB4_4yYLKWrM7LZB2s5G1uLCFYXU1P8pKz8UA'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers}).subscribe( resp => {
      console.log(resp);
    })
  }
}

// VIDEO 98 