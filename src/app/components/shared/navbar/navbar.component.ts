import { Component, OnInit } from '@angular/core';
// Importamos el modulo de rutas:
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // Creamos el objeto de ruta:
  constructor(private router:Router) { }

  ngOnInit() {
  }
  buscarHeroe( termino:string ){
    console.log(termino);
    // Añadimos el término de búsqueda:
    this.router.navigate(['/buscar', termino]);
  }

}
