import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliculasService, TipoBusqueda } from "../servicios/peliculas.service";

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

  results:Observable<any>;
  buscar:string = '';

  type: TipoBusqueda = TipoBusqueda.all;

  constructor(private peliculas:PeliculasService) { }

  ngOnInit() {
  }


  busquedaPeliculas(){
    this.results = this.peliculas.consultarPeliculas(this.buscar, this.type);
  }

}
