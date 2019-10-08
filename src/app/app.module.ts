import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SweetAlert2Module, SwalComponent } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { CriterioComponent } from './components/criterio/criterio.component';
import { MostrarCriteriosComponent } from './components/mostrar-criterios/mostrar-criterios.component';
import { CriterioDosComponent } from './components/criterio-dos/criterio-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    CriterioComponent,
    MostrarCriteriosComponent,
    CriterioDosComponent,
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
