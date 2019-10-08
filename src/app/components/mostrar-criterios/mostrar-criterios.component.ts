import { Component, OnInit } from '@angular/core';
import { Criterios } from '../../models/criterios';

@Component({
  selector: 'app-mostrar-criterios',
  templateUrl: './mostrar-criterios.component.html',
  styleUrls: ['./mostrar-criterios.component.css']
})
export class MostrarCriteriosComponent implements OnInit {

  mostrar2:boolean = false;
  numeroCriterio:number = 0;

  arrayCriterios: Criterios[] = [
    {id: 1, nombreCriterio: "precio", peso: 40},
    {id: 2, nombreCriterio: "marca", peso: 60}
  ];

  seleccionarCriterio: Criterios = new Criterios();

  constructor() { }

  ngOnInit() {
  }

  mostrarCriterio() { /* Cada vez que se haga click cambiara el estado de true a false */
    this.mostrar2 = !this.mostrar2;
  }

  agregarCriterio(){
    if (this.seleccionarCriterio.id === 0) {
      this.seleccionarCriterio.id = this.arrayCriterios.length + 1;
      this.arrayCriterios.push(this.seleccionarCriterio);
    }
    this.seleccionarCriterio  = new Criterios();
  }

  eliminarCriterio(){
    this.arrayCriterios = this.arrayCriterios.filter(x => x !== this.seleccionarCriterio);
    this.seleccionarCriterio = new Criterios();
  }
}
