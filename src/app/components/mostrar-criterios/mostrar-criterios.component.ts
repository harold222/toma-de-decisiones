import { Component, OnInit } from '@angular/core';
import { Criterios } from '../../models/criterios';

@Component({
  selector: 'app-mostrar-criterios',
  templateUrl: './mostrar-criterios.component.html',
  styleUrls: ['./mostrar-criterios.component.css']
})
export class MostrarCriteriosComponent implements OnInit {

  // arrayCriterios: Criterios[] = [
  //   {id: 1, nombreCriterio: "precio", peso: 40},
  //   {id: 2, nombreCriterio: "marca", peso: 60}
  // ];
  
  arrayCriterios: Criterios[];

  constructor() { }

  ngOnInit() {
  }

  muestra(){
    console.log("see");
  }
}
