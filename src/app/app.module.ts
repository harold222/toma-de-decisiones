import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SweetAlert2Module, SwalComponent } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { CriterioComponent } from './components/criterio/criterio.component';
import { CriterioUnoComponent } from './components/criterio-uno/criterio-uno.component';
import { CriterioDosComponent } from './components/criterio-dos/criterio-dos.component';
import { CriterioTresComponent } from './components/criterio-tres/criterio-tres.component';
import { CriterioCuatroComponent } from './components/criterio-cuatro/criterio-cuatro.component';
import { TablaResultadosComponent } from './components/tabla-resultados/tabla-resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    CriterioComponent,
    CriterioUnoComponent,
    CriterioDosComponent,
    CriterioTresComponent,
    CriterioCuatroComponent,
    TablaResultadosComponent,
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
