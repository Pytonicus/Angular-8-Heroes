import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Importamos el servicio:
import { HeroesService } from '../../sevicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  // Creamos un atributo que inicializaremos con un objeto:
  heroe:any = {};
  // Creamos el objeto del servicio:
  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params =>{
      console.log(params['id']);
      // Recuperamos el héroe que queremos mostrar en el objeto:
      this.heroe = this.heroesService.getHeroe(params['id']); // le pasamos al método el id que capturamos por parámetros.
    });
   }

  ngOnInit() {
  }

}
