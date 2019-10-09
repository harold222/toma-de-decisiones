import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SweetAlert2Module, SwalComponent } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { CriterioComponent } from './components/criterio/criterio.component';
import { MostrarCriteriosComponent } from './components/mostrar-criterios/mostrar-criterios.component';
import { CriterioDosComponent } from './components/criterio-dos/criterio-dos.component';
import { CriterioTresComponent } from './components/criterio-tres/criterio-tres.component';
import { CriterioCuatroComponent } from './components/criterio-cuatro/criterio-cuatro.component';

@NgModule({
  declarations: [
    AppComponent,
    CriterioComponent,
    MostrarCriteriosComponent,
    CriterioDosComponent,
    CriterioTresComponent,
    CriterioCuatroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    SweetAlert2Module,
    SweetAlert2Module.forChild({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
