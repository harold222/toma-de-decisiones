import { Component, OnInit } from '@angular/core';
import { Criterios } from '../../models/criterios';

@Component({
  selector: 'app-criterio',
  templateUrl: './criterio.component.html',
  styleUrls: ['./criterio.component.css']
})
export class CriterioComponent implements OnInit {

  arrayCriterios: Criterios[] =  [/* Inicializo con cualquier valor los criterios */
    {id: 1, nombreCriterio: "Precio", peso: 10 }
  ];

  seleccionarCriterio: Criterios = new Criterios();

  constructor() { }

  ngOnInit() {
  }

  agregarCriterio(){
    if (this.seleccionarCriterio.id === 0) {
      this.seleccionarCriterio.id = this.arrayCriterios.length + 1;
      this.arrayCriterios.push(this.seleccionarCriterio);
    }

    this.seleccionarCriterio  = new Criterios(); //agrego uno nuevo para limpiar el input
    console.log(this.arrayCriterios);
  }

}
