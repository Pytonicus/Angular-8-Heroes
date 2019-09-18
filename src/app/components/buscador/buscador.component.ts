import { Component, OnInit } from '@angular/core';
// Cargamos el modulo que recoge parametros de la url:
import { ActivatedRoute } from '@angular/router';
// Importamos el servicio de los héroes:
import { HeroesService } from '../../sevicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  // Creamos un atributo de tipo array y lo inicializamos:
  heroes:any[] = [];
  // Y creamos otro para almacenar el termino de búsqueda:
  termino:string;

  // Creamos el objeto del activatedRoute:
  constructor(
    private activatedRoute:ActivatedRoute,
    // Cargamos el servicio en un objeto: 
    private heroesService: HeroesService
    ) { }

  ngOnInit() {
    // Recogemos el parámetro:
    this.activatedRoute.params.subscribe( params =>{
      // Guardamos el parámetro en nuestro atributo:
      this.termino = params['termino'];
      // Asignamos el resultado de la búsqueda a nuestro atributo pasandole al metodo de busqueda el parametro termino:
      this.heroes = this.heroesService.buscarHeroes(this.termino);
      console.log(this.heroes);
    });
  }

}
