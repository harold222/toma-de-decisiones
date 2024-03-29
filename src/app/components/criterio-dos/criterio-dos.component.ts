import { Component, OnInit } from '@angular/core';
import { Criterios } from '../../models/criterios';

@Component({
  selector: 'app-criterio-dos',
  templateUrl: './criterio-dos.component.html',
  styleUrls: ['./criterio-dos.component.css']
})
export class CriterioDosComponent implements OnInit {

  mostrar2:boolean = false;
  numeroCriterio: Criterios = new Criterios();

  arrayCriterios: Criterios[] = [
    {id: 1, nombreCriterio: "moneda", peso: 40},
    {id:2, nombreCriterio: "valor", peso: 60}
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
    this.arrayCriterios = this.arrayCriterios.filter(x => x !== this.seleccionarCriterio);
    this.seleccionarCriterio = new Criterios();
  }

}
