import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../sevicios/heroes.service';
// Importamos el router:
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes:any[] = [];
  // Creamos un objeto con el router:
  constructor(private heroesService: HeroesService, private router:Router) { }

  ngOnInit() {
    this.heroes = this.heroesService.getheroes();
    console.log(this.heroes);
  }

  // Creamos el metodo que diriga al heroe:
  verHeroe(id){
    // Utilizamos el router para redirigir la página:
    this.router.navigate(['/heroe', id]);
  } 

}
