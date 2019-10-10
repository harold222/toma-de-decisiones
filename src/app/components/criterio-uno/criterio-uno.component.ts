import { Component, OnInit } from '@angular/core';
import { Criterios } from '../../models/criterios';

@Component({
  selector: 'app-criterio-uno',
  templateUrl: './criterio-uno.component.html',
  styleUrls: ['./criterio-uno.component.css']
})
export class CriterioUnoComponent implements OnInit {

  mostrar2:boolean = false;
  numeroCriterio: Criterios = new Criterios();

  arrayCriterios: Criterios[] = [
    {id: 1, nombreCriterio: "precio", peso: 40},
    {id: 2, nombreCriterio: "marca", peso: 60}
  ];

  seleccionarCriterio: Criterios = new Criterios();

  constructor() { }

  ngOnInit() {
  }

  mostrarCriterio(criter) { /* Cada vez que se haga click cambiara el estado de true a false */
    this.numeroCriterio = criter;
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

  }
}
