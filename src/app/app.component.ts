import { Component } from '@angular/core';
import { Decision } from './models/decision';
import { MostrarCriteriosComponent } from './components/mostrar-criterios/mostrar-criterios.component';

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
  numeroCriterio: number = 0;
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

    /* Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    }) */

  }

  mostrarCriterio() { /* Cada vez que se haga click cambiara el estado de true a false */
    this.mostrar = !this.mostrar;
  } 

}

