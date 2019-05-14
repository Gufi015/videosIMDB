import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';





export enum TipoBusqueda{
  All = '',
  movies = 'Movies',
  series = 'Series',
  episodios = 'Episodios'

}

@Injectable({
  providedIn: "root"
})
export class PeliculasService {
  url: "http://www.omdbapi.com/";
  apikey: "ee2f4f1b";

  constructor(private http: HttpClient) {}


  consultarPeliculas(title:string, type: TipoBusqueda): Observable<any>{
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}$apikey=${this.apikey}`).pipe(map(results => results['Search']));
  }

  getDetails(id){

    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apikey}`);

  }
}
