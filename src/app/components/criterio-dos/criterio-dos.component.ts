import { Component, OnInit } from '@angular/core';
import { Criterios } from '../../models/criterios';

@Component({
  selector: 'app-criterio-dos',
  templateUrl: './criterio-dos.component.html',
  styleUrls: ['./criterio-dos.component.css']
})
export class CriterioDosComponent implements OnInit {

  arrayCriterios: Criterios[] = [
    {id: 1, nombreCriterio: "moneda", peso: 40},
    {id:2, nombreCriterio: "valor", peso: 60}
  ];

  constructor() { }

  ngOnInit() {
  }

}
