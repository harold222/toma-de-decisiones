import { Component } from '@angular/core';
import { Decision } from './models/decision';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ArrayDeDecisiones: Decision[] = [
    {id: 1, name: "Celular", description: "toma de decision para comprar un celular" },
    {id: 2, name: "Computador", description: "toma de decision para comprar un computador" },
    {id: 3, name: "Bicicleta", description: "toma de decision para comprar una bicicleta" }
  ];

  seleccionarDecision: Decision = new Decision();
  numeroCriterio: Decision = new Decision();
  mostrar: boolean = false;/* Los criterios comenzaran en false para que no se muestren */

  agregarEditar(){//evento del boton
    if (this.seleccionarDecision.id === 0) {
      this.seleccionarDecision.id = this.ArrayDeDecisiones.length + 1;
      this.ArrayDeDecisiones.push(this.seleccionarDecision);
    }
    this.seleccionarDecision  = new Decision(); //agrego uno nuevo para limpiar el input
  }

  editarDecision(decisiones: Decision){
    this.seleccionarDecision = decisiones;
  }

  delete() {
    this.ArrayDeDecisiones = this.ArrayDeDecisiones.filter(x => x !== this.seleccionarDecision);
    this.seleccionarDecision = new Decision();
  }

  mostrarCriterio(decisione) { /* Cada vez que se haga click cambiara el estado de true a false */
    this.numeroCriterio = decisione;
    this.mostrar = !this.mostrar;
  }

}

