import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe:any = {}
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>
  constructor(private router:Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe(){
    // Volvemos a dejar como estaba el método:
    console.log(this.index);
    this.router.navigate(['/heroe', this.index]);
    /* Esto era solo un ejemplo de Output y eventemitter:
    this.heroeSeleccionado.emit(this.index);
    */
  }
}
