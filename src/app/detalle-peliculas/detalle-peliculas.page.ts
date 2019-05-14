import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../servicios/peliculas.service';

@Component({
  selector: 'app-detalle-peliculas',
  templateUrl: './detalle-peliculas.page.html',
  styleUrls: ['./detalle-peliculas.page.scss'],
})
export class DetallePeliculasPage implements OnInit {

  informacion = null;

  constructor(private activated:ActivatedRoute, private peliculaInfo:PeliculasService) { }

  ngOnInit() {

    let id = this.activated.snapshot.paramMap.get('id');
    this.peliculaInfo.getDetails(id).subscribe((result)=>{
      console.log(result);
      this.informacion = result;
    })
  }

  openWebsite(){
    window.open(this.informacion.Website,'_system', 'location=yes');
  }

}
